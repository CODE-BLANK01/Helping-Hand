const campaignData = require("../database/campaignData");
const HttpError = require("./http-error");

const viewCampaigns = () => {
  return campaignData.campaigns;
};

const specificCampaign = (campaignID) => {
  const campaign = campaignData.campaigns.find((campaign) => {
    return campaign.campID === campaignID;
  });
  if (campaign) {
    return campaign;
  } else {
    throw new HttpError("campaign not found", 404);
  }
};
module.exports = { viewCampaigns, specificCampaign };
