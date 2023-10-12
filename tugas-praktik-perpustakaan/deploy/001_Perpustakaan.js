"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const func = async ({ deployments, ethers, }) => {
    const { deploy } = deployments;
    const accounts = await ethers.getSigners();
    const deployer = accounts[0];
    console.log('Deployer address =', deployer.address);
    // Deploy Perpustakaan
    const perpustakaan = await deploy('Perpustakaan', {
        contract: 'Perpustakaan',
        from: deployer.address,
        args: [],
        gasLimit: 1000000, // Sesuaikan dengan gas limit yang sesuai
    });
    console.log('Perpustakaan deployed at', perpustakaan.address);
};
func.tags = ['Perpustakaan']; // Sesuaikan dengan tag yang sesuai
exports.default = func;
