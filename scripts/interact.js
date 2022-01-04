const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

const contract = require("../artifacts/contracts/NodeJSToken.sol/NodeJSToken.json");

const alchemyProvider = new ethers.providers.AlchemyProvider(
  (network = "rinkeby"),
  API_KEY
);

const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

const nodeJSTokenContract = new ethers.Contract(
  CONTRACT_ADDRESS,
  contract.abi,
  signer
);

(async () => {
  process.stdout.write("Fetching the data. Please wait");
  const dotsIncrement = setInterval(() => {
    process.stdout.write(".");
  }, 1000);

  const tokenName = await nodeJSTokenContract.name();
  const tokenSymbol = await nodeJSTokenContract.symbol();
  const tokenSupply = await nodeJSTokenContract.totalSupply();

  clearInterval(dotsIncrement);
  process.stdout.write("\n");

  console.log(
    `       
       Name: ${tokenName}
       Symbol: ${tokenSymbol}
       Supply: ${String(tokenSupply)}`
  );
})();
