const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

const contract = require("../artifacts/contracts/NodeJSNFT.sol/NodeJSNFT.json");

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

  const tokenAuthor = await nodeJSTokenContract.author();

  clearInterval(dotsIncrement);
  process.stdout.write("\n");

  console.log(`This NFT author is: ${tokenAuthor}`);

  const mintToken = await nodeJSTokenContract.mintNodeJSToken();
  await mintToken.wait();
})();
