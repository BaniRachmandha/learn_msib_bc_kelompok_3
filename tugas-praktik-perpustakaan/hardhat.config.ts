import { HardhatUserConfig } from 'hardhat/config';
import * as dotenv from 'dotenv';
import '@nomicfoundation/hardhat-toolbox';
import '@nomiclabs/hardhat-ethers';
import '@typechain/hardhat';
import 'hardhat-deploy';
import 'hardhat-contract-sizer';
import 'hardhat-prettier';

dotenv.config();
const {
  MNEMONIC,
  MNEMONIC_GANACHE,
  RPC_MUMBAI,
  PRIVKEY1,
  PRIVKEY2,
  PRIVKEY3,
  ETHERSCAN_APIKEY_POLYGON,
} = process.env;

  module.exports = {
    solidity: {
      version: '0.8.19',
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    mumbai: {
      chainId: 80001,
      url: RPC_MUMBAI,
      accounts: [PRIVKEY1!, PRIVKEY2!, PRIVKEY3!],
      verify: {
        etherscan: {
          apiKey: ETHERSCAN_APIKEY_POLYGON,
        },
      },
    },
  },
  paths: {
    deployments: './deployments',
  },
  contractSizer: {
    alphaSort: false,
    disambiguatePaths: false,
    runOnCompile: true,
    strict: true,
  },
  typechain: {
    outDir: './typechain',
    target: 'ethers-v6',
  },
};

