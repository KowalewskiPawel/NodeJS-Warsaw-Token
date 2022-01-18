(async () => {
  try {
    const HelloWorldToken = await ethers.getContractFactory("HelloWorldToken");

    const deployedToken = await HelloWorldToken.deploy();

    console.log("Contract deployed to address:", deployedToken.address);

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
