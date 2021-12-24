// import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import {
//   InjectEthersProvider,
//   Contract,
//   StaticJsonRpcProvider,
//   InjectContractProvider,
//   EthersContract,
// } from 'nestjs-ethers';

import {
  LegendsLaboratory,
  LegendsNFT,
  LegendToken,
  LegendRejuvenation,
  LegendsMarketplace,
  LegendsMatchingBoard,
} from './config/contract-ABIs';

import {
  legendsLaboratory,
  legendsNFT,
  legendToken,
  legendRejuvenation,
  legendsMarketplace,
  legendsMatchingBoard,
} from './config/contract-addresses';

//todo: make dynamic for easy reusability

// @Injectable()
// export class ContractLabService {
//   constructor(
//     @InjectContractProvider()
//     private readonly ethersContract: EthersContract,
//   ) {}

import { ethers, Contract } from 'ethers';

const provider = new ethers.providers.JsonRpcProvider(
  'https://data-seed-prebsc-2-s2.binance.org:8545/',
);

const admin: Contract = new ethers.Contract(
  legendsLaboratory,
  LegendsLaboratory.abi,
  provider,
);

const nft: Contract = new ethers.Contract(legendsNFT, LegendsNFT.abi, provider);

const token: Contract = new ethers.Contract(
  legendToken,
  LegendToken.abi,
  provider,
);

const reju: Contract = new ethers.Contract(
  legendRejuvenation,
  LegendRejuvenation.abi,
  provider,
);

const marketplace: Contract = new ethers.Contract(
  legendsMarketplace,
  LegendsMarketplace.abi,
  provider,
);

const matching: Contract = new ethers.Contract(
  legendsMatchingBoard,
  LegendsMatchingBoard.abi,
  provider,
);

export const ContractLab = {
  admin: admin,
  nft: nft,
  token: token,
  reju: reju,
  marketplace: marketplace,
  matching: matching,
};
