"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hardhat_1 = require("hardhat");
async function main() {
    // contract instance
    const employee = await hardhat_1.ethers.getContract('Employee');
    let employeeLength = await employee.employeeLength();
    console.log('employeeLength =', Number(employeeLength));
    // get signers
    const [owner, employee1] = await hardhat_1.ethers.getSigners();
    // add employee
    const addEmployee = await employee
        .connect(owner)
        .addEmployee(employee1.address, 'Budi', 'Programmer', {
        gasPrice: 2000000000,
        gasLimit: 500000, // max: 19,000,000 gas
        // nonce: 12 // transaction count
        // value: 1000000000000000000 // 1 ether = 1e18 wei
    });
    await addEmployee.wait();
    employeeLength = await employee.employeeLength();
    console.log('employeeLength =', Number(employeeLength));
    const employeeDetail = await employee.employeeDetail(employee1.address);
    console.log('employeeDetail =', employeeDetail);
}
main().catch((err) => {
    console.log('error =', err);
    process.exitCode = 1;
});
