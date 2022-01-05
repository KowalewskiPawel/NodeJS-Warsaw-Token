(async () => {
  try {
    const NodeJSToken = await ethers.getContractFactory("NodeJSNFT");

    const deployedToken = await NodeJSToken.deploy();

    console.log("Contract deployed to address:", deployedToken.address);

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
