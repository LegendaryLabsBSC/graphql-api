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

// let admin: Contract;
// let nft: Contract;
// let token: Contract;
// let reju: Contract;
// let marketplace: Contract;
// let matching: Contract;

// @Injectable()
// export class ContractLabService {
//   constructor(
//     @InjectContractProvider()
//     private readonly ethersContract: EthersContract,
//   ) {}

import { ethers, Contract } from 'ethers';

// const admin: Contract = ethersContract.create(
//   legendsLaboratory,
//   LegendsLaboratory.abi,
// );

// nft: Contract = this.ethersContract.create(legendsNFT, LegendsNFT.abi);

// token: Contract = this.ethersContract.create(legendToken, LegendToken.abi);

// reju: Contract = this.ethersContract.create(
//   legendRejuvenation,
//   LegendRejuvenation.abi,
// );

// marketplace: Contract = this.ethersContract.create(
//   legendsMarketplace,
//   LegendsMarketplace.abi,
// );

// matching: Contract = this.ethersContract.create(
//   legendsMatchingBoard,
//   LegendsMatchingBoard.abi,
// );

// ContractLab = {
//   admin: this.admin,
//   nft: this.nft,
//   token: this.token,
//   reju: this.reju,
//   marketplace: this.marketplace,
//   matching: this.matching,
// };
// }

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

// const admin: ContractInterface = {
//   read: new ethers.Contract(legendsLaboratory, LegendsLaboratory.abi, provider),
//   write: new ethers.Contract(legendsLaboratory, LegendsLaboratory.abi, signer),
// };

// const nft: ContractInterface = {
//   read: new ethers.Contract(legendsNFT, LegendsNFT.abi, provider),
//   write: new ethers.Contract(legendsNFT, LegendsNFT.abi, signer),
// };

// const token: ContractInterface = {
//   read: new ethers.Contract(legendToken, LegendToken.abi, provider),
//   write: new ethers.Contract(legendToken, LegendToken.abi, signer),
// };

// const rejuvenation: ContractInterface = {
//   read: new ethers.Contract(
//     legendRejuvenation,
//     LegendRejuvenation.abi,
//     provider,
//   ),
//   write: new ethers.Contract(
//     legendRejuvenation,
//     LegendRejuvenation.abi,
//     signer,
//   ),
// };

// const marketplace: ContractInterface = {
//   read: new ethers.Contract(
//     legendsMarketplace,
//     LegendsMarketplace.abi,
//     provider,
//   ),
//   write: new ethers.Contract(
//     legendsMarketplace,
//     LegendsMarketplace.abi,
//     signer,
//   ),
// };

// const matching: ContractInterface = {
//   read: new ethers.Contract(
//     legendsMatchingBoard,
//     LegendsMatchingBoard.abi,
//     provider,
//   ),
//   write: new ethers.Contract(
//     legendsMatchingBoard,
//     LegendsMatchingBoard.abi,
//     signer,
//   ),
// };

// const ContractLab: ContractBundle = {
//   admin: admin,
//   nft: nft,
//   token: token,
//   rejuvenation: rejuvenation,
//   marketplace: marketplace,
//   matching: matching,
// };

// export { ContractLab };
