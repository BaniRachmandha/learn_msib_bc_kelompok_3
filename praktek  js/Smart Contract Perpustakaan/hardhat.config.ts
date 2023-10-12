import { HardhatUserConfig } from "hardhat/config";

import "hardhat-deploy";
import "hardhat-contract-sizer";
import { ethers } from "ethers";
import { libraryAddress, provider } from "./test/addbook";
import LibraryABI from "./artifacts/contracts/Library.sol/Library.json"; // Sesuaikan dengan path yang benar


const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  defaultNetwork: "hardhat",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545", // Sesuaikan dengan URL dan port node Ethereum lokal Anda
    },

    hardhat: {
      chainId: 1337, // Sesuaikan dengan chainId
    },
  },

  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
  contractSizer: {
    alphaSort: true,
    runOnCompile: true,
    disambiguatePaths: false,
  },
};

export default config;// Inisialisasi kontrak Library
// hardhat.config.ts
export const libraryContract = new ethers.Contract(libraryAddress, LibraryABI, signer);


