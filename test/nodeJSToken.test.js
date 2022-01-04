const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("NodeJSToken", function () {
  let token;

  const tokenReceiver = "0x23618e81E3f5cdF7f54C3d65f7FBc0aBf5B21E8f";

  beforeEach(async () => {
    const NodeJSToken = await ethers.getContractFactory("NodeJSToken");
    token = await NodeJSToken.deploy();
    await token.deployed();
  });

  it("Should return the name of the token", async function () {
    expect(await token.name()).to.equal("NodeJSToken");
  });

  it("Should return the symbol of the token", async function () {
    expect(await token.symbol()).to.equal("NJSW");
  });

  it("Should return a total supply of the token", async function () {
    const totalSupply = await token.totalSupply();

    expect(String(totalSupply)).to.equal("1000");
  });

  it("Should transfer tokens to the other account", async function () {
    // given

    const sendTransaction = await token.transfer(tokenReceiver, 200);

    // when

    await sendTransaction.wait();

    const addressBalance = await token.balancesOf(tokenReceiver);

    // then

    expect(String(addressBalance)).to.equal("200");
  });
});
