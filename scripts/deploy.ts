import { ethers } from "hardhat";

async function main() {
  const WRNFTMarketplace = await ethers.getContractFactory("WRNFTMarketplace");
  const wrNFTMarketplace = await WRNFTMarketplace.deploy();
  await wrNFTMarketplace.deployed();
  console.log(`wrNFTMarketplace deployed to ${wrNFTMarketplace.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
