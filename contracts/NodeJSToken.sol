//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract HelloWorldToken {
    string public name = "HelloWorldToken";
    string public symbol = "HWT";
    uint public totalSupply = 1000;
    mapping(address => uint) balances;

    constructor() {
        balances[msg.sender] = totalSupply;
    }

    function transfer(address to, uint amount) external {
        require(balances[msg.sender] >= amount, "Not enough tokens");
        balances[msg.sender] -= amount;
        balances[to] += amount;
    }

    function balanceOf(address account) external view returns (uint) {
        return balances[account];
    }
}
