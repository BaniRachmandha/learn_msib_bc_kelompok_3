"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deploy = void 0;
const web3_1 = __importDefault(require("web3"));
/**
 * Deploy the given contract
 * @param {string} contractName name of the contract to deploy
 * @param {Array<any>} args list of constructor' parameters
 * @param {string} from account used to send the transaction
 * @param {number} gas gas limit
 * @return {Options} deployed contract
 */
const deploy = async (contractName, args, from, gas) => {
    const web3 = new web3_1.default(web3Provider);
    console.log(`deploying ${contractName}`);
    // Note that the script needs the ABI which is generated from the compilation artifact.
    // Make sure contract is compiled and artifacts are generated
    const artifactsPath = `browser/contracts/artifacts/${contractName}.json`;
    const metadata = JSON.parse(await remix.call('fileManager', 'getFile', artifactsPath));
    const accounts = await web3.eth.getAccounts();
    const contract = new web3.eth.Contract(metadata.abi);
    const contractSend = contract.deploy({
        data: metadata.data.bytecode.object,
        arguments: args
    });
    const newContractInstance = await contractSend.send({
        from: from || accounts[0],
        gas: gas || 1500000
    });
    return newContractInstance.options;
};
exports.deploy = deploy;
