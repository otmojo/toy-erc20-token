import { ethers } from "hardhat";

async function main() {
  // Get deployer
  const [deployer] = await ethers.getSigners();

  // Replace with your actual deployed contract address
  const tokenAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

  // Get contract instance
  const token = await ethers.getContractAt("ToyToken", tokenAddress);

  // Query deployer's balance
  const balance = await token.balanceOf(deployer.address);
  console.log("Deployer balance:", balance.toString());

  // Test transfer
  const recipient = "0x0000000000000000000000000000000000000001"; // Test address
  const tx = await token.transfer(recipient, 100);
  await tx.wait();

  const newBalance = await token.balanceOf(deployer.address);
  console.log("Deployer balance after transfer:", newBalance.toString());
  const recipientBalance = await token.balanceOf(recipient);
  console.log("Recipient balance:", recipientBalance.toString());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});