(async () => {
  try {
    const NodeJSToken = await ethers.getContractFactory("NodeJSTokenERC20");

    const deployedToken = await NodeJSToken.deploy(
      "NodeJS Warsaw Token",
      "NJSW"
    );

    console.log("Contract deployed to address:", deployedToken.address);

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
