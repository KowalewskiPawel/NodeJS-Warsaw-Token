<br />
<h1 align="center">Node.js Warsaw Token</h1>

## About The Project

Presentation material of building a simple non-erc20 standard token, and NFT token using Node.js and Solidity. There are two branches for each type of token:

- `basic-token` branch with the simplest version of the token
- `nft-token` nft version according to ERC-721 standard

### Built With

- [Hardhat](https://hardhat.org/)
- [Solidity](https://docs.soliditylang.org/en/v0.8.11/)
- [Alchemy](https://www.alchemy.com/)

### Prerequisites

- [Node.js](https://nodejs.org/en/download/) - v14.17.5
- [Metmask](https://metamask.io/)

### Installation

1. Install all the dependencies - `npm install`

2. Create an account on Alchemy, then create a new app and select "Rinkeby" as a network.

3. Create a `.env` file in the root folder and add the
   following variables:

```
   API_URL=<ALCHEMY_API_URL>
   API_KEY=<THE_LAST_PART OF_THE_API_URL>
   PRIVATE_KEY=<YOUR_WALLET'S_PRIVATE_KEY>
   CONTRACT_ADDRESS=<DEPOLOYED_TOKEN_ADDRESS>
```

Hint: You can get your own API key in the alchemy dashboard. The last part can be added after deploying the token.

### Compiling the Contract

run `npx hardhat compile` command.

### Deploying The Token

Run `npx hardhat run scripts/deploy.js --network rinkeby` command.

### Interacting with The Token

Run `npx hardhat run scripts/interact.js` command.

## Testing Contracts

Run `npx hardhat test` command.

### Helpful links

- [OpenSea](https://testnets.opensea.io) NFT Marketplace
- [Rarible](https://rinkeby.rarible.com/token/ToknenAddress:ID) Alternative to the OpenSea just input your NFT's address and id in the corresponding places
- [RinkebyFaucet](https://faucets.chain.link/rinkeby) You can get some free rinkeby ETH here
- [Base64Encoder](https://www.utilities-online.info/base64)
