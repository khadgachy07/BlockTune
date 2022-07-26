const { ethers } = require("hardhat");

async function main() {
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so whitelistContract here is a factory for instances of our Whitelist contract.
  */
  const nftContract = await ethers.getContractFactory("BlockTuneNFT");

  // here we deploy the contract
  const deployedNftContract = await nftContract.deploy();
  // 10 is the Maximum number of whitelisted addresses allowed
  
  // Wait for it to finish deploying
  await deployedNftContract.deployed();

  // print the address of the deployed contract
  console.log(
    "NFT Contract Address:",
    deployedNftContract.address
  );
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

  // 0xBD700DaD9174E0E52eC1eA8dBaAe6c13e91f6668