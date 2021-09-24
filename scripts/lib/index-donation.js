var admin = require('firebase-admin');
var serviceAccount = require("../../rewilder-dev-firebase.json");
const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const FLAVOR_TEXT = require("../../src/lib/flavorText.js");
const TIER_MARKERS = require("../../src/lib/tierMarkers.js");

const db = admin.firestore(app);

module.exports = async function(donor, amount, tokenID, txid) {
  console.log(donor, "donated", ethers.utils.formatEther(amount), "ETH",
  "in transaction ", txid,
  "and obtained token id", tokenID.toString());

  tier = 'cypress';
  if (amount.gte(ethers.utils.parseEther(TIER_MARKERS['araucaria']))) {
    tier = 'araucaria';
  }
  if (amount.gte(ethers.utils.parseEther(TIER_MARKERS['sequoia']))) {
    tier = 'sequoia';
  }
  const data = {
    name: 'Rewilder Origin Donation #' + tokenID.toString(),
    description: 'Receipt NFT for Rewilder\'s first donation campaign on October 2021.',
    external_url: tokenID?`https://app.rewilder.xyz/donation/${tokenID}`:'https://app.rewilder.xyz',
    // TODO: use the actual images, not mockups
    image: 'https://rewilder.xyz/assets/img/mockup/' + tier + '.png',
    attributes: [
      {trait_type: "donor", value: donor},
      {trait_type: "amount", value: ethers.utils.formatEther(amount)+" ETH"},
      {trait_type: "tier", value: tier},
      {trait_type: "flavor", value: FLAVOR_TEXT[tier]},
    ],
  };
  console.log(data);
  await db.collection(`tokens-${network.name}`).doc(tokenID.toString()).set(data);
  console.log("NFT metadata created and stored for", tokenID.toString(),"successfully!!");

  // initialize updates for this token
  const updates = {};
  updates[0] = {
    timestamp: new Date().getTime(),
    type: "creation", 
    info: {
      "txid": txid,
    }
  }
  console.log(updates);
  await db.collection(`updates-${network.name}`).doc(tokenID.toString()).set(updates);
  console.log("NFT updates stored for", tokenID.toString(),"successfully!!");

}