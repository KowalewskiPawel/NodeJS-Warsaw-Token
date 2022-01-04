
// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "hardhat/console.sol";


contract NodeJSNFT is ERC721URIStorage {

  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;
  uint private _maxSupply = 3;
  address public author;

  constructor() ERC721 ("NodeJS Warsaw NFT", "NJSW") {
     author = msg.sender;
  }

  function mintNodeJSToken() public {

      require(_tokenIds.current() <= _maxSupply, "All of the tokens minted");

    uint256 newTokenId = _tokenIds.current();

    _safeMint(msg.sender, newTokenId);

    _setTokenURI(newTokenId, "data:application/json;base64,");

    console.log("Token no. %s has been minted to %s", newTokenId, msg.sender);

    _tokenIds.increment();
  }
}