// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ToyToken is ERC20 {
    uint256 private constant ot = 1000;

    constructor() ERC20("ToyToken", "TOY") {
        _mint(msg.sender, ot * 10 ** decimals());
    }
}