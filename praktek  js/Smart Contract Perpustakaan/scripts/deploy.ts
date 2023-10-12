import { HardhatRuntimeEnvironment } from "hardhat/types";

async function main(hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;

  const { deployer } = await getNamedAccounts();

  await deploy("Library", {
    from: deployer,
    args: [], // Tambahkan argumen sesuai dengan kontrak Anda
    log: true,
  });
}

main.tags = ["Library"];
export default main;
