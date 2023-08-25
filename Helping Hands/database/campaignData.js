const fakedata = {
  campaigns: [
    {
      campID: 1,
      campaignTitle: "Help John's Medical Expenses",
      campaignDescription:
        "John is battling a rare illness and needs funds for medical treatments and procedures. Let's come together and support him in this difficult time. Your donations will help alleviate the financial burden and provide hope for John's recovery.",
      fundraisingGoal: 5000,
      currentAmountRaised: 2500,
      campaignPoster: "/assets/1.jpg",
      campaignUpdates: [
        {
          updateTitle: "First Treatment Completed",
          updateDescription:
            "John successfully completed his first round of treatment. Thank you all for your generous support!",
        },
        {
          updateTitle: "Reaching the Halfway Mark",
          updateDescription:
            "We have reached the halfway mark in our fundraising goal. Your contributions are making a difference!",
        },
      ],
      donors: [
        {
          name: "Sarah Johnson",
          donationAmount: 100,
          message: "Wishing you a speedy recovery, John!",
        },
        {
          name: "Mark Thompson",
          donationAmount: 250,
          message: "You're in our thoughts. Stay strong!",
        },
        {
          name: "Emily Rodriguez",
          donationAmount: 50,
          message: "Sending love and support your way.",
        },
      ],
    },
    {
      campID: 2,
      campaignTitle: "Support Local Animal Shelter",
      campaignDescription:
        "Our local animal shelter is in need of funds to provide medical care, food, and shelter to abandoned and neglected animals. Help us make a difference in their lives. Your donations will directly impact the well-being and future of the animals under our care.",
      fundraisingGoal: 10000,
      currentAmountRaised: 7500,
      campaignPoster: "/assets/Support Local Animal Shelter.jpg",
      campaignUpdates: [
        {
          updateTitle: "New Shelter Improvements",
          updateDescription:
            "Thanks to your donations, we were able to make necessary improvements to the shelter facilities. The animals are now more comfortable!",
        },
        {
          updateTitle: "Adoption Success Stories",
          updateDescription:
            "Several animals found their forever homes recently. Your support is helping us give them a second chance at happiness.",
        },
      ],
      donors: [
        {
          name: "Jessica Brown",
          donationAmount: 200,
          message: "Thank you for taking care of our furry friends!",
        },
        {
          name: "David Miller",
          donationAmount: 500,
          message:
            "Keep up the amazing work. The animals deserve our love and care.",
        },
        {
          name: "Sophia Clark",
          donationAmount: 1000,
          message: "Happy to support such a worthy cause!",
        },
      ],
    },
    {
      campID: 3,
      campaignTitle: "Help Students in Need",
      campaignDescription:
        "Many students in our community lack access to essential educational resources. Let's bridge the gap and provide them with the tools they need to succeed. Your contributions will empower students and enable them to reach their full potential.",
      fundraisingGoal: 3000,
      currentAmountRaised: 1500,
      campaignPoster: "/assets/Help Students in Need.jpg",
      campaignUpdates: [
        {
          updateTitle: "Supply Drive Success",
          updateDescription:
            "Thanks to your donations, we were able to organize a successful school supply drive and provide backpacks filled with essential items to 100 students.",
        },
        {
          updateTitle: "Tutoring Program Launch",
          updateDescription:
            "With the funds raised, we initiated a tutoring program to offer additional support to struggling students. Together, we can make a difference!",
        },
      ],
      donors: [
        {
          name: "Michael Johnson",
          donationAmount: 50,
          message:
            "Education is the key to a brighter future. Happy to contribute!",
        },
        {
          name: "Rachel Adams",
          donationAmount: 100,
          message:
            "Every child deserves access to quality education. Keep up the great work!",
        },
        {
          name: "Robert Wilson",
          donationAmount: 250,
          message:
            "I believe in the potential of every student. Let's empower them together!",
        },
      ],
    },
    {
      campID: 4,
      campaignTitle: "Help Local Community Center",
      campaignDescription:
        "Our community center is a vital resource for the neighborhood, providing support, activities, and programs for residents of all ages. Help us keep it running smoothly. Your support will strengthen the sense of community and provide opportunities for personal growth.",
      fundraisingGoal: 8000,
      currentAmountRaised: 3500,
      campaignPoster: "/assets/4.jpg",
      campaignUpdates: [
        {
          updateTitle: "Renovation Progress",
          updateDescription:
            "We've started renovating the community center's kitchen area. Your donations are making it possible to create a better space for our community events.",
        },
        {
          updateTitle: "New Programs Announcement",
          updateDescription:
            "We're excited to announce new programs for seniors and youth. Your support allows us to expand our offerings and serve more community members.",
        },
      ],
      donors: [
        {
          name: "Jennifer Lee",
          donationAmount: 150,
          message:
            "Happy to contribute to such a valuable resource in our community!",
        },
        {
          name: "Andrew Thompson",
          donationAmount: 300,
          message:
            "Thank you for providing a place for our kids to learn and grow.",
        },
        {
          name: "Michelle Davis",
          donationAmount: 500,
          message:
            "Proud to support the community center. It brings us all closer together.",
        },
      ],
    },
    {
      campID: 5,
      campaignTitle: "Help Disaster Relief Efforts",
      campaignDescription:
        "Recent natural disasters have devastated communities. Let's provide emergency relief and help rebuild the lives of those affected by the disaster. Your contributions will bring hope and resources to those struggling to recover.",
      fundraisingGoal: 20000,
      currentAmountRaised: 18000,
      campaignPoster: "/assets/Help Disaster Relief Efforts.jpg",
      campaignUpdates: [
        {
          updateTitle: "Relief Supplies Distributed",
          updateDescription:
            "Thanks to your generous donations, we were able to distribute relief supplies such as food, water, and hygiene kits to affected communities.",
        },
        {
          updateTitle: "Rebuilding Homes",
          updateDescription:
            "We have started the process of rebuilding damaged homes and providing shelter to those who lost everything. Your support is making a difference!",
        },
      ],
      donors: [
        {
          name: "Daniel Brown",
          donationAmount: 1000,
          message: "My thoughts are with those affected. Stay strong!",
        },
        {
          name: "Alexandra Wilson",
          donationAmount: 500,
          message:
            "Happy to contribute to the recovery efforts. Let's rebuild together!",
        },
        {
          name: "Ryan Miller",
          donationAmount: 250,
          message: "Sending support and prayers to the affected communities.",
        },
      ],
    },
    {
      campID: 6,
      campaignTitle: "Support Youth Sports Program",
      campaignDescription:
        "We believe in the power of sports to shape the lives of young athletes. Help us provide equipment, training, and opportunities for underprivileged youth to participate in sports. Your support will foster teamwork, leadership, and a healthy lifestyle.",
      fundraisingGoal: 5000,
      currentAmountRaised: 2800,
      campaignPoster: "/assets/Support Youth Sports Program.jpg",
      campaignUpdates: [
        {
          updateTitle: "New Soccer Jerseys",
          updateDescription:
            "With your support, we were able to purchase new jerseys for our youth soccer team. They're excited and ready to play!",
        },
        {
          updateTitle: "Basketball Court Renovation",
          updateDescription:
            "Thanks to your donations, we're renovating the basketball court to create a safer and more enjoyable space for our young athletes.",
        },
      ],
      donors: [
        {
          name: "Sophie Hernandez",
          donationAmount: 200,
          message:
            "Sports have a positive impact on young lives. Keep up the good work!",
        },
        {
          name: "Jonathan Davis",
          donationAmount: 100,
          message:
            "I want every child to have the opportunity to experience the joy of sports. Thanks for making it happen.",
        },
        {
          name: "Melissa Anderson",
          donationAmount: 500,
          message:
            "Sports taught me important life lessons. Happy to support this program.",
        },
      ],
    },
    {
      campID: 7,
      campaignTitle: "Help Homeless Shelter",
      campaignDescription:
        "Our homeless shelter provides a safe haven for individuals experiencing homelessness. Help us ensure they have access to basic necessities, shelter, and support services. Your contributions will provide comfort and hope to those in need.",
      fundraisingGoal: 15000,
      currentAmountRaised: 9000,
      campaignPoster: "/assets/Help Homeless Shelter.jpg",
      campaignUpdates: [
        {
          updateTitle: "Expanded Capacity",
          updateDescription:
            "Thanks to your donations, we were able to expand the shelter's capacity and accommodate more individuals in need of a safe place to stay.",
        },
        {
          updateTitle: "Job Training Program",
          updateDescription:
            "We're launching a job training program to help our residents develop skills and regain independence. Your support is changing lives!",
        },
      ],
      donors: [
        {
          name: "Matthew Thompson",
          donationAmount: 1000,
          message:
            "Grateful for the work you do. Let's help those in need get back on their feet!",
        },
        {
          name: "Olivia Parker",
          donationAmount: 500,
          message:
            "Happy to contribute to a cause that provides hope and support to the homeless.",
        },
        {
          name: "Jacob Wilson",
          donationAmount: 250,
          message:
            "Every person deserves a safe place to sleep. Keep up the good work!",
        },
      ],
    },
    {
      campID: 8,
      campaignTitle: "Support Local Arts Festival",
      campaignDescription:
        "Our community arts festival celebrates creativity and brings people together. Help us organize a memorable event and promote arts and culture in our town. Your support will enrich the community and inspire artistic expression.",
      fundraisingGoal: 7000,
      currentAmountRaised: 5000,
      campaignPoster: "/assets/Support Local Arts Festival.jpg",
      campaignUpdates: [
        {
          updateTitle: "Confirmed Performances",
          updateDescription:
            "We have confirmed several local bands and dance groups to perform at the arts festival. Get ready for a fantastic show!",
        },
        {
          updateTitle: "Art Exhibition Announced",
          updateDescription:
            "We're excited to announce an art exhibition showcasing the work of talented local artists. Your support is helping us create a vibrant arts community!",
        },
      ],
      donors: [
        {
          name: "Emily Thompson",
          donationAmount: 200,
          message:
            "The arts bring joy and inspiration. Thanks for organizing this festival!",
        },
        {
          name: "Daniel Johnson",
          donationAmount: 300,
          message:
            "Art is a universal language. Let's celebrate and appreciate the creativity in our community.",
        },
        {
          name: "Sophia Wilson",
          donationAmount: 500,
          message:
            "Thrilled to support local artists and promote cultural events. Keep up the great work!",
        },
      ],
    },
    {
      campID: 9,
      campaignTitle: "Help Small Business Recovery",
      campaignDescription:
        "Many small businesses in our town were severely impacted by recent economic challenges. Let's support them in rebuilding, reopening, and regaining their livelihoods. Your contributions will revitalize the local economy and support entrepreneurs.",
      fundraisingGoal: 10000,
      currentAmountRaised: 6000,
      campaignPoster: "/assets/Help Small Business Recovery.jpg",
      campaignUpdates: [
        {
          updateTitle: "Business Grants Distributed",
          updateDescription:
            "Thanks to your donations, we were able to provide grants to several affected businesses, helping them cover expenses and reopen their doors.",
        },
        {
          updateTitle: "Marketing Campaign Launched",
          updateDescription:
            "We initiated a marketing campaign to promote local businesses and encourage the community to shop locally. Your support is boosting their recovery!",
        },
      ],
      donors: [
        {
          name: "Emma Thompson",
          donationAmount: 250,
          message:
            "Small businesses are the heart of our community. Let's help them thrive again!",
        },
        {
          name: "James Rodriguez",
          donationAmount: 500,
          message:
            "Proud to support local entrepreneurs and their resilience. Together, we can rebuild.",
        },
        {
          name: "Liam Johnson",
          donationAmount: 1000,
          message:
            "Thriving small businesses create vibrant communities. Happy to contribute!",
        },
      ],
    },
    {
      campID: 10,
      campaignTitle: "Support Mental Health Services",
      campaignDescription:
        "Mental health is a crucial aspect of overall well-being. Help us provide affordable counseling, therapy, and support services to those in need in our community. Your contributions will promote mental wellness and support individuals on their journey to recovery.",
      fundraisingGoal: 5000,
      currentAmountRaised: 3500,
      campaignPoster: "/assets/Support Mental Health Services.jpg",
      campaignUpdates: [
        {
          updateTitle: "Additional Counselors Hired",
          updateDescription:
            "Thanks to your donations, we were able to hire additional counselors, reducing wait times and providing more support to those seeking help.",
        },
        {
          updateTitle: "Wellness Workshops Announced",
          updateDescription:
            "We're organizing a series of wellness workshops on stress management, self-care, and resilience. Your support is fostering a healthier community!",
        },
      ],
      donors: [
        {
          name: "Sophie Thompson",
          donationAmount: 100,
          message:
            "Mental health matters. Thank you for making counseling services accessible.",
        },
        {
          name: "Oliver Davis",
          donationAmount: 200,
          message:
            "Happy to contribute to destigmatizing mental health and promoting well-being.",
        },
        {
          name: "Ava Wilson",
          donationAmount: 500,
          message:
            "Supporting mental health services is investing in the overall health of our community.",
        },
      ],
    },
  ],
};

// Export the fakedata object
module.exports = fakedata;
