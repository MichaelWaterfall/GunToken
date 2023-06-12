async function main() {
  const [deployer] = await ethers.getSigners();

  console.log('Deploying contracts with the account: ', deployer.address);

  const weiAmount = (await deployer.getBalance()).toString();

  console.log('Account Balance: ', await ethers.utils.formatEther(weiAmount));

  const Token = await ethers.getContractFactory('GunToken');
  const token = await Token.deploy();

  console.log('Token Address: ', token.address);
}

main().then((error) => {
  console.log(error);
});
