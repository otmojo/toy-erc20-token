const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ToyToken", function () {
  it("mints initial supply to deployer", async function () {
    const [deployer] = await ethers.getSigners();

    const ToyToken = await ethers.getContractFactory("ToyToken");
    const toy = await ToyToken.deploy();
    await toy.waitForDeployment();

    const balance = await toy.balanceOf(deployer.address);
    const decimals = await toy.decimals();
    const expected = ethers.parseUnits("1000", decimals);

    expect(balance).to.equal(expected);
  });

  it("allows transfer between accounts", async function () {
    const [deployer, user] = await ethers.getSigners();

    const ToyToken = await ethers.getContractFactory("ToyToken");
    const toy = await ToyToken.deploy();
    await toy.waitForDeployment();

    const decimals = await toy.decimals();
    const amount = ethers.parseUnits("100", decimals);

    await toy.transfer(user.address, amount);

    const userBalance = await toy.balanceOf(user.address);
    expect(userBalance).to.equal(amount);
  });
});
