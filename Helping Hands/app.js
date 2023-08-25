const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const {
  viewCampaigns,
  specificCampaign,
} = require("./helpers/donations-helper");
const users = require("./database/userData");
const flash = require("express-flash");
const session = require("express-session");
const { v4: uuidv4 } = require("uuid");

const app = express();

const PORT = 5050;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: uuidv4(), // Generate a random session secret key
    resave: false,
    saveUninitialized: false,
  })
);

app.use(flash());

let isLoggedIn = false;
const isAuthenticated = (req, res, next) => {
  if (isLoggedIn) {
    return next();
  }
  res.redirect("/authenticate");
};

app.get("/", (req, res, next) => {
  res.render("index");
});

app.get("/authenticate", (req, res, next) => {
  res.render("authenticate");
});

// Sign up route
app.post("/signup", (req, res) => {
  const { username, email, password } = req.body;

  // Simple validation (You should perform more robust validation in production)
  if (!username || !email || !password) {
    return res.status(400).send("All fields are required.");
  }

  // Check if the user already exists (You should use a database query in production)
  const existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    return res.status(409).send("User with this email already exists.");
  }

  // Save the new user to the fake data store (Replace this with database logic in production)
  users.push({ username, email, password });

  res.redirect("/authenticate");
});

// Sign in route
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Simple validation (You should perform more robust validation in production)
  if (!username || !password) {
    return res.status(400).send("Email and password are required.");
  }

  // Find the user in the fake data store (Replace this with database query in production)
  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (!user) {
    return res.status(401).send("Invalid email or password.");
  }
  isLoggedIn = true;

  // Redirect to dashboard (Replace this with the actual dashboard route in production)
  res.redirect("/campaigns");
});

app.get("/campaigns", isAuthenticated, (req, res, next) => {
  try {
    const campaigns = viewCampaigns();
    res.render("campaigns", { campaigns });
  } catch (error) {
    res.status(error.code).json(error.message);
  }
});

// app.get("/campaigns/:cid", isAuthenticated, (req, res, next) => {
//   const campID = parseInt(req.params.cid);
//   const flashMessage = req.flash("success")[0] || null;
//   try {
//     let campaign = specificCampaign(campID);
//     res.render("donate", { campaign, flashMessage });
//   } catch (error) {
//     res.status(error.code).json(error.message);
//   }
// });

// app.post("/donate/:cid", (req, res) => {
//   const campID = parseInt(req.params.cid);
//   let campaign = specificCampaign(campID);
//   const { amount, name, message } = req.body;
//   console.log(campID);
//   // Add the new donor data to the donors array
//   // campaign.donors.push({ name, donationAmount: amount, message });

//   // Set flash message to be displayed on the redirected page
//   req.flash("success", "Thank you for your kind donation!");

//   // Redirect back to the campaign page after the donation is processed
//   res.redirect("/campaign");
// });

// Assuming you have already set up the required dependencies and middleware

// GET request to display the specific campaign with id
app.get("/campaigns/:cid", isAuthenticated, (req, res, next) => {
  const campID = parseInt(req.params.cid);
  const flashMessage = req.flash("success")[0] || null;
  let successMessages = [];
  if (flashMessage) {
    successMessages.push({ message: flashMessage });
  }
  try {
    let campaign = specificCampaign(campID);
    res.render("donate", { campaign, successMessages });
  } catch (error) {
    res.status(error.code).json(error.message);
  }
});

// POST request to handle the donation
app.post("/donate/:cid", (req, res) => {
  const campID = parseInt(req.params.cid);
  const { amount, name, message } = req.body;

  // Add the new donor data to the donors array
  let campaign = specificCampaign(campID);
  campaign.donors.push({ name, donationAmount: amount, message });

  // Set flash message to be displayed on the redirected page
  req.flash("success", "Thank you for your kind donation!");

  // Redirect back to the specific campaign page after the donation is processed
  res.redirect(`/campaigns/${campID}`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
