import { DeployFunction } from 'hardhat-deploy/dist/types';
import { HardhatRuntimeEnvironment } from 'hardhat/types';

const func: DeployFunction = async ({
  deployments,
  ethers,
}: HardhatRuntimeEnvironment) => {
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

export default func;
