const { ethers, utils, upgrades } = require("hardhat");
const hre = require("hardhat");
const { expect } = require("chai");


/* -------------------------------------------------------- Storage Locations

│ RewilderDonationCampaign    │ _paused                    │      0       │   0    │ t_bool                                              │
│ RewilderDonationCampaign    │ _owner                     │      0       │   1    │ t_address                                           │
│ RewilderDonationCampaign    │ _nft                       │      1       │   0    │ t_contract(RewilderNFT)3576                         │
│ RewilderDonationCampaign    │ _wallet                    │      2       │   0    │ t_address_payable                                   │
│ RewilderNFT                 │ _initialized               │      0       │   0    │ t_bool                                              │
│ RewilderNFT                 │ _initializing              │      0       │   1    │ t_bool                                              │
│ RewilderNFT                 │ __gap                      │      1       │   0    │ t_array(t_uint256)50_storage                        │
│ RewilderNFT                 │ __gap                      │      51      │   0    │ t_array(t_uint256)50_storage                        │
│ RewilderNFT                 │ _name                      │     101      │   0    │ t_string_storage                                    │
│ RewilderNFT                 │ _symbol                    │     102      │   0    │ t_string_storage                                    │
│ RewilderNFT                 │ _owners                    │     103      │   0    │ t_mapping(t_uint256,t_address)                      │
│ RewilderNFT                 │ _balances                  │     104      │   0    │ t_mapping(t_address,t_uint256)                      │
│ RewilderNFT                 │ _tokenApprovals            │     105      │   0    │ t_mapping(t_uint256,t_address)                      │
│ RewilderNFT                 │ _operatorApprovals         │     106      │   0    │ t_mapping(t_address,t_mapping(t_address,t_bool))    │
│ RewilderNFT                 │ __gap                      │     107      │   0    │ t_array(t_uint256)44_storage                        │
│ RewilderNFT                 │ _ownedTokens               │     151      │   0    │ t_mapping(t_address,t_mapping(t_uint256,t_uint256)) │
│ RewilderNFT                 │ _ownedTokensIndex          │     152      │   0    │ t_mapping(t_uint256,t_uint256)                      │
│ RewilderNFT                 │ _allTokens                 │     153      │   0    │ t_array(t_uint256)dyn_storage                       │
│ RewilderNFT                 │ _allTokensIndex            │     154      │   0    │ t_mapping(t_uint256,t_uint256)                      │
│ RewilderNFT                 │ __gap                      │     155      │   0    │ t_array(t_uint256)46_storage                        │
│ RewilderNFT                 │ _owner                     │     201      │   0    │ t_address                                           │
│ RewilderNFT                 │ __gap                      │     202      │   0    │ t_array(t_uint256)49_storage                        │
│ RewilderNFT                 │ __gap                      │     251      │   0    │ t_array(t_uint256)50_storage                        │
│ RewilderNFT                 │ __gap                      │     301      │   0    │ t_array(t_uint256)50_storage                        │
│ RewilderNFT                 │ _tokenIdCounter            │     351      │   0    │ t_struct(Counter)2388_storage  

probá meter: el campaign, slot 1  nftaddress 
el nft, slot 0, y el nft, slot para el counter, slot para el _tokenIdCounter (que se modifica), 
y slot para estas variables (que el método _mint modifica):
*/
describe("Rewilder Access List", function () {

  let RewilderDonationCampaign;
  const INITIALIZED_SLOT = 0;
  const OWNERS_STORAGE_SLOT = 103;
  const BALANCES_STORAGE_SLOT = 104;
  const TOKEN_ID_COUNTER_SLOT = 351;

  beforeEach(async function () {
    const [deployer, donorA, donorB, donorC, wallet] = await ethers.getSigners();
    this.deployer = deployer;
    this.donorA = donorA;
    this.donorB = donorB;
    this.donorC = donorC;
    this.wallet = wallet;
    
    const RewilderNFT = await ethers.getContractFactory("RewilderNFT");
    this.nft = await upgrades.deployProxy(RewilderNFT, { kind: "uups" });
    RewilderDonationCampaign = await ethers.getContractFactory("RewilderDonationCampaign");
    this.campaign = await RewilderDonationCampaign.deploy(
      this.nft.address, this.wallet.address);
    await this.campaign.deployed();
    await this.nft.transferOwnership(this.campaign.address);
    
    this.donationAmountWEI = ethers.utils.parseEther("1.0");
  });

  describe("basic transactions gas costs", function () {
    it("has different values for initial tx, tx for first time donating address, and txs for an address that has already donated", async function () {
      const noAccessListRsp = await this.campaign.connect(this.donorA).receiveDonation({ value: this.donationAmountWEI});
      const noAccessListReceipt = await noAccessListRsp.wait();
      console.log("1st TX, Donor A: ", noAccessListReceipt.gasUsed.toNumber());

      const noAccessListRsp2 = await this.campaign.connect(this.donorA).receiveDonation({ value: this.donationAmountWEI});
      const noAccessListReceipt2 = await noAccessListRsp2.wait();
      console.log("2nd TX, Donor A: ", noAccessListReceipt2.gasUsed.toNumber());
      
      const noAccessListRsp3 = await this.campaign.connect(this.donorB).receiveDonation({ value: this.donationAmountWEI});
      const noAccessListReceipt3 = await noAccessListRsp3.wait();
      console.log("3rd TX, Donor B: ", noAccessListReceipt3.gasUsed.toNumber());

      const noAccessListRsp4 = await this.campaign.connect(this.donorA).receiveDonation({ value: this.donationAmountWEI });
      const noAccessListReceipt4 = await noAccessListRsp4.wait();
      console.log("4th TX, Donor A: ", noAccessListReceipt4.gasUsed.toNumber());
      
      const noAccessListRsp5 = await this.campaign.connect(this.donorB).receiveDonation({ value: this.donationAmountWEI });
      const noAccessListReceipt5 = await noAccessListRsp5.wait();
      console.log("5th TX, Donor B: ", noAccessListReceipt5.gasUsed.toNumber());
      
      const noAccessListRsp6 = await this.campaign.connect(this.donorC).receiveDonation({ value: this.donationAmountWEI });
      const noAccessListReceipt6 = await noAccessListRsp6.wait();
      console.log("6th TX, Donor C: ", noAccessListReceipt6.gasUsed.toNumber());
    });
  });

  describe("accessing storage slots", function(){
   
    it("gets the right storage slot when accessing the token counter by slot number", async function(){
      // get the current token id
      await this.campaign.connect(this.donorA).receiveDonation({ value: this.donationAmountWEI });
      let tokenId = await getLastestTokenId(this.campaign);
      
      // get the current token counter
      let tokenIdCounter = await getValueAt(this.nft.address, TOKEN_ID_COUNTER_SLOT);
      expect(ethers.utils.hexStripZeros(tokenId.add(1))).to.equal(ethers.utils.hexStripZeros(tokenIdCounter));

      await this.campaign.connect(this.donorA).receiveDonation({value: this.donationAmountWEI});
      
      // token counter value changes to match token id
      tokenId = await getLastestTokenId(this.campaign);
      tokenIdCounter = await getValueAt(this.nft.address, TOKEN_ID_COUNTER_SLOT);
      expect(ethers.utils.hexStripZeros(tokenId.add(1))).to.equal(ethers.utils.hexStripZeros(tokenIdCounter));

      tokenIdCounter = await getValueAt(this.nft.address, TOKEN_ID_COUNTER_SLOT, { offset: 1 });
      expect(ethers.utils.hexStripZeros(tokenIdCounter)).to.equal("0x");      
    });

    it("gets the right storage slot when accessing _balances by slot index and key", async function() {
      
      console.log("Making a donation with Donor A: ", this.donorA.address);
      await this.campaign.connect(this.donorA).receiveDonation({value: this.donationAmountWEI});
      let balancesCounter = await getValueAt(this.nft.address, BALANCES_STORAGE_SLOT, { key: this.donorA.address });
      console.log("Balances Counter: ", balancesCounter);
      
      expect(ethers.utils.hexStripZeros(balancesCounter)).to.equal("0x1");
      
      console.log("Making two donations with Donor B: ", this.donorB.address);
      await this.campaign.connect(this.donorB).receiveDonation({value: this.donationAmountWEI});
      await this.campaign.connect(this.donorB).receiveDonation({value: this.donationAmountWEI});
      balancesCounter = await getValueAt(this.nft.address, BALANCES_STORAGE_SLOT, { key: this.donorB.address });
      console.log("Balances Counter: ", balancesCounter);
      
      expect(ethers.utils.hexStripZeros(balancesCounter)).to.equal("0x2");
    });

    it("gets the right storage slot when accessing _owners by slot index and key", async function() {
      
      console.log("Making a donation with Donor A: ", this.donorA.address);
      await this.campaign.connect(this.donorA).receiveDonation({value: this.donationAmountWEI});
      console.log("Making two donations with Donor B: ", this.donorB.address);
      await this.campaign.connect(this.donorB).receiveDonation({value: this.donationAmountWEI});
      await this.campaign.connect(this.donorB).receiveDonation({value: this.donationAmountWEI});
      console.log("Making another donation with Donor A: ", this.donorA.address);
      await this.campaign.connect(this.donorA).receiveDonation({value: this.donationAmountWEI});
    
      const ownersStorage = [];
      for (_key = 0; _key <= 5; _key++) {
        ownersStorage[_key] = ethers.utils.hexStripZeros(await getValueAt(this.nft.address, OWNERS_STORAGE_SLOT, { key: _key }));
      }
      
      expect(ownersStorage[0]).to.equal("0x");
      expect(ownersStorage[1]).to.equal(this.donorA.address.toLowerCase());
      expect(ownersStorage[2]).to.equal(this.donorB.address.toLowerCase());
      expect(ownersStorage[3]).to.equal(this.donorB.address.toLowerCase());
      expect(ownersStorage[4]).to.equal(this.donorA.address.toLowerCase());
      expect(ownersStorage[5]).to.equal("0x");
    });

  });

  describe("gas usage comparison", function () {

    describe("when warming the initialized slot for the first transaction", function () {
      it("uses more gas than a normal tx", async function () {
        accessList = [{
          address: this.nft.address,
          storageKeys: [formatSlotPosition(INITIALIZED_SLOT)]
        }];
        
        const accessListRsp = await this.campaign.connect(this.donorA).receiveDonation({ value: this.donationAmountWEI, accessList: accessList });
        const accessListReceipt = await accessListRsp.wait();
        console.log("Gas for warmed initialized slot: ", accessListReceipt.gasUsed.toNumber());
        
        expect(accessListReceipt.gasUsed).to.be.above(172811);
        
        console.log("Saved Gas: ", ethers.BigNumber.from(172811).sub(accessListReceipt.gasUsed).toNumber());
      });
    });

    describe("after making an initial transaction", function () {
      beforeEach(async function () {
        console.log("\n Making two basic transactions: ");

        const noAccessListRsp = await this.campaign.connect(this.donorA).receiveDonation({ value: this.donationAmountWEI});
        const noAccessListReceipt = await noAccessListRsp.wait();
        console.log("First basic tx gas: ", noAccessListReceipt.gasUsed.toNumber());

        const noAccessListRsp2 = await this.campaign.connect(this.donorA).receiveDonation({ value: this.donationAmountWEI});
        const noAccessListReceipt2 = await noAccessListRsp2.wait();
        console.log("Second basic tx gas: ", noAccessListReceipt2.gasUsed.toNumber());
        
        this.basicTxGas = noAccessListReceipt2.gasUsed;
      });

      describe("when warming the initialized slot", function () {
        it("uses more gas than a normal tx", async function () {
          accessList = [{
            address: this.nft.address,
            storageKeys: [formatSlotPosition(INITIALIZED_SLOT)]
          }];
          
          const accessListRsp = await this.campaign.connect(this.donorA).receiveDonation({ value: this.donationAmountWEI, accessList: accessList });
          const accessListReceipt = await accessListRsp.wait();
          console.log("Gas for warmed token counter slot: ", accessListReceipt.gasUsed.toNumber());
          
          expect(accessListReceipt.gasUsed).to.be.above(this.basicTxGas);
          
          console.log("Saved Gas: ", this.basicTxGas.sub(accessListReceipt.gasUsed).toNumber());
        });
      });

      describe("when warming the token counter writing slot", function () {
        it("uses less gas than a normal tx", async function () {
          accessList = [{
            address: this.nft.address,
            storageKeys: [formatSlotPosition(TOKEN_ID_COUNTER_SLOT)]
          }];
          
          const accessListRsp = await this.campaign.connect(this.donorA).receiveDonation({ value: this.donationAmountWEI, accessList: accessList });
          const accessListReceipt = await accessListRsp.wait();
          console.log("Gas for warmed token counter slot: ", accessListReceipt.gasUsed.toNumber());
          
          expect(accessListReceipt.gasUsed).to.be.below(this.basicTxGas);
          
          console.log("Saved Gas: ", this.basicTxGas.sub(accessListReceipt.gasUsed).toNumber());
        });
      });

      describe("when warming balances storage", function () {
        describe("when warming the balances base slot", function () {
          it("uses more gas than a normal tx", async function () {
            accessList = [{
              address: this.nft.address,
              storageKeys: [formatSlotPosition(BALANCES_STORAGE_SLOT)]
            }];
            
            const accessListRsp = await this.campaign.connect(this.donorA).receiveDonation({ value: this.donationAmountWEI, accessList: accessList });
            const accessListReceipt = await accessListRsp.wait();
            console.log("Gas for warmed balance writting slot: ", accessListReceipt.gasUsed.toNumber());
            
            expect(accessListReceipt.gasUsed).to.be.above(this.basicTxGas);
            console.log("Saved Gas: ", this.basicTxGas.sub(accessListReceipt.gasUsed).toNumber());
          });
        });

        describe("when warming the balances writing slot", function () {
          it("uses less gas than a normal tx", async function () {
            accessList = [{
              address: this.nft.address,
              storageKeys: [formatSlotPosition(BALANCES_STORAGE_SLOT, { key: this.donorA.address })]
            }];
          
            const accessListRsp = await this.campaign.connect(this.donorA).receiveDonation({ value: this.donationAmountWEI, accessList: accessList });
            const accessListReceipt = await accessListRsp.wait();
            console.log("Gas for warmed balance writting slot: ", accessListReceipt.gasUsed.toNumber());
            
            expect(accessListReceipt.gasUsed).to.be.below(this.basicTxGas);
            console.log("Saved Gas: ", this.basicTxGas.sub(accessListReceipt.gasUsed).toNumber());
          });
        });

        describe("when warming the balances base and writing slot", function () {
          it("uses more gas than a normal tx", async function () {
            accessList = [{
              address: this.nft.address,
              storageKeys: [
                formatSlotPosition(BALANCES_STORAGE_SLOT),
                formatSlotPosition(BALANCES_STORAGE_SLOT, { key: this.donorA.address })
              ]
            }];
                
            const accessListRsp = await this.campaign.connect(this.donorA).receiveDonation({ value: this.donationAmountWEI, accessList: accessList });
            const accessListReceipt = await accessListRsp.wait();
            console.log("Gas for warmed balances writing and base slot: ", accessListReceipt.gasUsed.toNumber());
    
            expect(accessListReceipt.gasUsed).to.be.above(this.basicTxGas);
            console.log("Saved Gas: ", this.basicTxGas.sub(accessListReceipt.gasUsed).toNumber());
          });
        });
      });

      describe("when warming the owners storage", function () {
        describe("when warming the owners base slot", function () {
          it("uses more gas than a normal tx", async function () {
            accessList = [{
              address: this.nft.address,
              storageKeys: [
                formatSlotPosition(OWNERS_STORAGE_SLOT),
              ]
            }];
              
            const accessListRsp = await this.campaign.connect(this.donorA).receiveDonation({ value: this.donationAmountWEI, accessList: accessList });
            const accessListReceipt = await accessListRsp.wait();
            console.log("Gas for warmed owners base slot: ", accessListReceipt.gasUsed.toNumber());
            expect(accessListReceipt.gasUsed).to.be.above(this.basicTxGas);
            console.log("Saved Gas: ", this.basicTxGas.sub(accessListReceipt.gasUsed).toNumber());
          });
        });

        describe("when warming the owners writing slot", function () {
          describe("if the owners writing slot equals the token id counter minus one", function () {
            it("uses more gas than a normal tx", async function () {
              const tokenIdCounter = await getValueAt(this.nft.address, TOKEN_ID_COUNTER_SLOT);
              const ownerWritingPosition = ethers.utils.hexZeroPad(ethers.BigNumber.from(tokenIdCounter).sub(1).toHexString(), 32);
                accessList = [{
                  address: this.nft.address,
                  storageKeys: [formatSlotPosition(OWNERS_STORAGE_SLOT, { key: ownerWritingPosition })]
                }];
              
                const accessListRsp = await this.campaign.connect(this.donorA).receiveDonation({ value: this.donationAmountWEI, accessList: accessList });
                const accessListReceipt = await accessListRsp.wait();
                console.log("Gas for warmed owners writting slot: ", accessListReceipt.gasUsed.toNumber());
                
                expect(accessListReceipt.gasUsed).to.be.above(this.basicTxGas);
                console.log("Saved Gas: ", this.basicTxGas.sub(accessListReceipt.gasUsed).toNumber());
              });
          });

          describe("if the owners writing slot equals the token id counter", function () {
            it("uses less gas than a normal tx", async function () {
              const ownerWritingPosition = await getValueAt(this.nft.address, TOKEN_ID_COUNTER_SLOT);
                accessList = [{
                  address: this.nft.address,
                  storageKeys: [formatSlotPosition(OWNERS_STORAGE_SLOT, { key: ownerWritingPosition })]
                }];
              
                const accessListRsp = await this.campaign.connect(this.donorA).receiveDonation({ value: this.donationAmountWEI, accessList: accessList });
                const accessListReceipt = await accessListRsp.wait();
                console.log("Gas for warmed owners writting slot: ", accessListReceipt.gasUsed.toNumber());
                
                expect(accessListReceipt.gasUsed).to.be.below(this.basicTxGas);
                console.log("Saved Gas: ", this.basicTxGas.sub(accessListReceipt.gasUsed).toNumber());
              });
          });
          
          describe("if the owners writing slot equals the token id counter plus one", function () {
            it("uses more gas than a normal tx", async function () {
              const tokenIdCounter = await getValueAt(this.nft.address, TOKEN_ID_COUNTER_SLOT);
              const ownerWritingPosition = ethers.utils.hexZeroPad(ethers.BigNumber.from(tokenIdCounter).add(1).toHexString(), 32);
                accessList = [{
                  address: this.nft.address,
                  storageKeys: [formatSlotPosition(OWNERS_STORAGE_SLOT, { key: ownerWritingPosition })]
                }];
              
                const accessListRsp = await this.campaign.connect(this.donorA).receiveDonation({ value: this.donationAmountWEI, accessList: accessList });
                const accessListReceipt = await accessListRsp.wait();
                console.log("Gas for warmed owners writting slot plus one: ", accessListReceipt.gasUsed.toNumber());
                
                expect(accessListReceipt.gasUsed).to.be.above(this.basicTxGas);
                console.log("Saved Gas: ", this.basicTxGas.sub(accessListReceipt.gasUsed).toNumber());
              });
          });
        });
      });
      
      describe("when warming the token counter writing slot, the balances writing slot, and the owners writing slot", function () {
        it("uses less gas than a normal tx", async function () {
          const tokenIdCounter = await getValueAt(this.nft.address, TOKEN_ID_COUNTER_SLOT);
          ownerWritingPosition = ethers.utils.hexZeroPad(ethers.BigNumber.from(tokenIdCounter).toHexString(), 32);

          accessList = [{
            address: this.nft.address,
            storageKeys: [
              formatSlotPosition(TOKEN_ID_COUNTER_SLOT),
              formatSlotPosition(BALANCES_STORAGE_SLOT, { key: this.donorA.address }),
              formatSlotPosition(OWNERS_STORAGE_SLOT, { key: ownerWritingPosition })
            ]
          }];
            
          const accessListRsp = await this.campaign.connect(this.donorA).receiveDonation({ value: this.donationAmountWEI, accessList: accessList });
          const accessListReceipt = await accessListRsp.wait();
          console.log("Gas for warmed balances writing slot, owners writing slot, and token id counter slot: ", accessListReceipt.gasUsed.toNumber());
          
          expect(accessListReceipt.gasUsed).to.be.below(this.basicTxGas);
          console.log("Saved Gas: ", this.basicTxGas.sub(accessListReceipt.gasUsed).toNumber());
        });
      });
    });
  });
});

async function getLastestTokenId(campaign){
  const eventFilter = campaign.filters.DonationReceived();
  const events = await campaign.queryFilter(eventFilter, "latest");
  return events[0].args["tokenID"];
}

async function getValueAt(address, slot,  { key, offset } = {}) {
  const formattedStorageAddress = ethers.utils.hexStripZeros(formatSlotPosition(slot, {key, offset}));
  return await hre.network.provider.send("eth_getStorageAt", [address,  formattedStorageAddress]);
}

function formatSlotPosition(slot,  { key, offset } = {}) {
  let formattedSlotIndex = ethers.utils.hexZeroPad(ethers.BigNumber.from(slot).toHexString(), 32);
  let storageAddress;
  
  if (key) {
    const newKeyPreimage = ethers.utils.concat([
      ethers.utils.hexZeroPad(key, 32),
      formattedSlotIndex,
    ]);
    storageAddress = ethers.utils.keccak256(newKeyPreimage);
  } else {
    if (offset) {
      storageAddress = ethers.BigNumber.from(formattedSlotIndex).add(offset).toHexString();
    } else {
      storageAddress = formattedSlotIndex
    }
  }
  return storageAddress;
}
