"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEpoch = void 0;
const hardhat_network_helpers_1 = require("@nomicfoundation/hardhat-network-helpers");
async function getEpoch() {
    return await hardhat_network_helpers_1.time.latest();
}
exports.getEpoch = getEpoch;
