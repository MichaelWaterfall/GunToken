import '@nomicfoundation/hardhat-toolbox';
import '@openzeppelin/hardhat-upgrades';
import '@primitivefi/hardhat-marmite';
require('dotenv').config();

module.exports = {
  solidity: '0.8.17',
  networks: {
    sepolia: {
      url: process.env.URL,
      accounts: [process.env.PRIVATE_KEY],
    },
    hardhat: {
      fork: {
        url: process.env.URL,
        blockNumber: 1,
      },
    },
  },
};
