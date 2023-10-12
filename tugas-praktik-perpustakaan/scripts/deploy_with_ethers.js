"use strict";
// This script can be used to deploy the "Storage" contract using ethers.js library.
// Please make sure to compile "./contracts/1_Storage.sol" file before running this script.
// And use Right click -> "Run" from context menu of the file to run the script. Shortcut: Ctrl+Shift+S
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_lib_1 = require("./ethers-lib");
(async () => {
    try {
        const result = await (0, ethers_lib_1.deploy)('Storage', []);
        console.log(`address: ${result.address}`);
    }
    catch (e) {
        console.log(e.message);
    }
})();
