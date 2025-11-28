import hre from "hardhat";

async function main() {
  const { ethers } = hre;
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with account:", deployer.address);

  const ToyToken = await ethers.getContractFactory("ToyToken");
  const toy = await ToyToken.deploy();
  await toy.waitForDeployment();

  console.log("ToyToken deployed to:", await toy.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
