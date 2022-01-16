import { utils } from 'ethers';
import { task, types } from 'hardhat/config';

task('update-duration', 'Update duration time')
  .setAction(async (_, { ethers })=> {

    const [deployer] = await ethers.getSigners();
    console.log(deployer)
    const nounAuctionHouse = await ethers.getContractFactory('NounsAuctionHouse');
    const error = await nounAuctionHouse.attach('0x5165AC1cff7B23B8764b1c95fd57738E94165899')
    .setDuration(5 * 5);
  
    console.log(error);
  });

/*
task('create-proposal', 'Create a governance proposal')
  .addOptionalParam(
    'nounsDaoProxy',
    'The `NounsDAOProxy` contract address',
    '0x610178dA211FEF7D417bC0e6FeD39F05609AD788',
    types.string,
  )
  .setAction(async ({ nounsDaoProxy }, { ethers }) => {
    const nounsDaoFactory = await ethers.getContractFactory('NounsDAOLogicV1');
    const nounsDao = nounsDaoFactory.attach(nounsDaoProxy);

    const [deployer] = await ethers.getSigners();
    const oneETH = utils.parseEther('1');

    const receipt = await (
      await nounsDao.propose(
        [deployer.address],
        [oneETH],
        [''],
        ['0x'],
        '# Test Proposal\n## This is a **test**.',
      )
    ).wait();
    if (!receipt.events?.length) {
      throw new Error('Failed to create proposal');
    }
    console.log('Proposal created');
  });
  */
