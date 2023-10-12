"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
require("@typechain/hardhat");
require("hardhat-deploy");
require("hardhat-contract-sizer");
require("hardhat-prettier");
dotenv.config();
const { MNEMONIC, MNEMONIC_GANACHE, RPC_MUMBAI, PRIVKEY1, PRIVKEY2, PRIVKEY3, ETHERSCAN_APIKEY_POLYGON, } = process.env;
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
            accounts: [PRIVKEY1, PRIVKEY2, PRIVKEY3],
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
