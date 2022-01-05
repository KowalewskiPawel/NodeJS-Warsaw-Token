const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("NodeJSNFT", function () {
  let token;

  const tokenAuthor = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";

  beforeEach(async () => {
    const NodeJSToken = await ethers.getContractFactory("NodeJSNFT");
    token = await NodeJSToken.deploy();
    await token.deployed();
  });

  it("Should return the correct token author", async function () {
    expect(await token.author()).to.equal(tokenAuthor);
  });

  it("Shouldn't mint more than 3 tokens", async function () {
    for (let i = 0; i < 2; i++) {
      await token.mintNodeJSToken();
    }

    await expect(token.mintNodeJSToken()).to.be.throw;
  });
});
