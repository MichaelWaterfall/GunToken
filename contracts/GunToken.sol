//SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract GunToken is ERC20 {
    uint constant _initial_supply = 100 * (10 ** 18);
    address public owner;

    constructor() ERC20("GunToken", "GT") {
        owner = msg.sender;
        _mint(owner, _initial_supply);
    }

    function drop(ERC20 token, address[] memory recipients) public {
        require(msg.sender == owner, "Only the owner can call this function");
        uint recipientLength = recipients.length;
        for (uint i = 0; i < recipientLength; i++) {
            token.approve(owner, 1);
            token.transferFrom(owner, recipients[i], 1);
        }
    }
}
