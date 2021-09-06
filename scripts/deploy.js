const {config, ethers, upgrades, erc1967} = require("hardhat");
const fs = require("fs");
const path = require('path')

const contractAddressFile = `${config.paths.artifacts}${path.sep}..${path.sep}addresses.json`

async function verifyImplementation(implAddress) {
  try {
    await hre.run("verify:verify", {
      address: implAddress,
      constructorArguments: [],
    });
  } catch(err) {
    if (err.message.includes("Contract source code already verified")) {
      console.log(err.message)
    } else {
      throw err;
    }
  }
}

async function main() {
  
  // TODO: allow configuring wallet externally
  const [deployer, wallet] = await ethers.getSigners();
  const addresses = {};
  
  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", 
    (await deployer.getBalance()/1e18).toString(), 
    network.name, "ETH");
    
  // re-create contract address file if needed, and back up old one
  if (fs.existsSync(contractAddressFile)) {
    const ts = new Date().getTime();
    const contractAddressFileNoJSON = contractAddressFile.split(".")[0];
    fs.copyFileSync(contractAddressFile, `${contractAddressFileNoJSON}-${ts}.json`)
    fs.unlinkSync(contractAddressFile);
  }
  
  addresses['network'] = network.name;
    
  // greeter
  if (network.name == "localhost") {
    const Greeter = await hre.ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, Hardhat!");
    await greeter.deployed();
    addresses["Greeter"] = greeter.address;
    console.log("Greeter deployed to:", greeter.address);
  }
  
  // NFT
  console.log("Deploying upgradeable RewilderNFT...");
  const RewilderNFT = await ethers.getContractFactory("RewilderNFT");
  const nft = await upgrades.deployProxy(RewilderNFT, { kind: "uups" });
  await nft.deployed();
  console.log("RewilderNFT proxy deployed to:", nft.address);
  const nftImpl = await upgrades.erc1967.getImplementationAddress(nft.address);
  console.log("RewilderNFT implementation at:", nftImpl);
  addresses["RewilderNFT"] = nft.address;
  addresses["RewilderNFTImpl"] = nftImpl;
  await verifyImplementation(nftImpl);
  
  
  // donation campaign
  console.log("Deploying upgradeable RewilderDonationCampaign...");
  const RewilderDonationCampaign = await ethers.getContractFactory("RewilderDonationCampaign");
  const campaign = await upgrades.deployProxy(RewilderDonationCampaign, 
    [nft.address, wallet.address], { kind: "uups" });
  await campaign.deployed();
  console.log("RewilderDonationCampaign proxy deployed to:", campaign.address);
  const campaignImpl = await upgrades.erc1967.getImplementationAddress(campaign.address);
  console.log("RewilderDonationCampaign implementation at:", campaignImpl);
  addresses["RewilderDonationCampaign"] = campaign.address;
  addresses["RewilderDonationCampaignImpl"] = campaignImpl;
  await verifyImplementation(campaignImpl);

  // transfer nft ownership to donation campaign
  console.log("Transferring NFT ownership to Campaign");
  await nft.transferOwnership(campaign.address);
  
  // Save the contract addresses so our frontend can read it
  console.log("Saving deployed contract addresses to file...");
  fs.appendFileSync(contractAddressFile, JSON.stringify(addresses, null, 2));
  console.log("Done!");
  
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
