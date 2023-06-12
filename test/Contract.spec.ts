import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { expect } from 'chai';
import { ethers } from 'hardhat';
import { ERC20, GunToken } from '../typechain-types';

describe('Contract', () => {
  let accounts: SignerWithAddress[];
  let contract: GunToken;
  let token: ERC20;

  before(async () => {
    accounts = await ethers.getSigners();
    const factory = await ethers.getContractFactory('GunToken');
    contract = (await factory.deploy()) as GunToken;
    token = (await ethers.getContractAt('ERC20', '0xA7554e3C507E2b53C1056E642F9C94e27c7689E9')) as ERC20;
  });

  it('should run drop function', async () => {
    const recipients = [accounts[0].address, accounts[1].address, accounts[2].address];
    console.log(await token.balanceOf(contract.owner()));
    await token.approve(contract.address, 3);
    await contract.drop(token.address, recipients);
  });
});
