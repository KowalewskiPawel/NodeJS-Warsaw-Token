const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

const contract = require("../artifacts/contracts/HelloWorldToken.sol/HelloWorldToken.json");

const alchemyProvider = new ethers.providers.AlchemyProvider(
  (network = "rinkeby"),
  API_KEY
);

const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

const helloWorldTokenContract = new ethers.Contract(
  CONTRACT_ADDRESS,
  contract.abi,
  signer
);

(async () => {
  process.stdout.write("Fetching the data. Please wait");
  const dotsIncrement = setInterval(() => {
    process.stdout.write(".");
  }, 1000);

  const tokenName = await helloWorldTokenContract.name();
  const tokenSymbol = await helloWorldTokenContract.symbol();
  const tokenSupply = await helloWorldTokenContract.totalSupply();

  clearInterval(dotsIncrement);
  process.stdout.write("\n");

  console.log(
    `       
       Name: ${tokenName}
       Symbol: ${tokenSymbol}
       Supply: ${String(tokenSupply)}`
  );
})();
