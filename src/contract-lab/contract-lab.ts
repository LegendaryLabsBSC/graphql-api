import { ethers, Contract } from 'ethers';

import {
  LegendsLaboratory,
  LegendsNFT,
  LegendToken,
  LegendRejuvenation,
  LegendsMarketplace,
  LegendsMatchingBoard,
} from './config/contract-ABIs';
// } from "@legendarylabs/api/src/contract-lab/config/contract-ABIs";

import {
  legendsLaboratory,
  legendsNFT,
  legendToken,
  legendRejuvenation,
  legendsMarketplace,
  legendsMatchingBoard,
} from './config/contract-addresses';
// } from "@legendarylabs/api/src/contract-lab/config/contract-addresses";

export interface ContractInterface {
  read: Contract;
  write: Contract;
}

export interface ContractBundle {
  admin: ContractInterface;
  nft: ContractInterface;
  token: ContractInterface;
  rejuvenation: ContractInterface;
  marketplace: ContractInterface;
  matching: ContractInterface;
}

const smartContracts = [
  LegendsLaboratory,
  LegendsNFT,
  LegendToken,
  LegendRejuvenation,
  LegendsMarketplace,
  LegendsMatchingBoard,
];

const provider: any = new ethers.providers.Web3Provider(window.ethereum);
const signer: any = provider.getSigner();

//todo: put alert back in and see if it works with deployed build

//todo: make dynamic for easy reusability
const admin: ContractInterface = {
  read: new ethers.Contract(legendsLaboratory, LegendsLaboratory.abi, provider),
  write: new ethers.Contract(legendsLaboratory, LegendsLaboratory.abi, signer),
};

const nft: ContractInterface = {
  read: new ethers.Contract(legendsNFT, LegendsNFT.abi, provider),
  write: new ethers.Contract(legendsNFT, LegendsNFT.abi, signer),
};

const token: ContractInterface = {
  read: new ethers.Contract(legendToken, LegendToken.abi, provider),
  write: new ethers.Contract(legendToken, LegendToken.abi, signer),
};

const rejuvenation: ContractInterface = {
  read: new ethers.Contract(
    legendRejuvenation,
    LegendRejuvenation.abi,
    provider,
  ),
  write: new ethers.Contract(
    legendRejuvenation,
    LegendRejuvenation.abi,
    signer,
  ),
};

const marketplace: ContractInterface = {
  read: new ethers.Contract(
    legendsMarketplace,
    LegendsMarketplace.abi,
    provider,
  ),
  write: new ethers.Contract(
    legendsMarketplace,
    LegendsMarketplace.abi,
    signer,
  ),
};

const matching: ContractInterface = {
  read: new ethers.Contract(
    legendsMatchingBoard,
    LegendsMatchingBoard.abi,
    provider,
  ),
  write: new ethers.Contract(
    legendsMatchingBoard,
    LegendsMatchingBoard.abi,
    signer,
  ),
};

const ContractLab: ContractBundle = {
  admin: admin,
  nft: nft,
  token: token,
  rejuvenation: rejuvenation,
  marketplace: marketplace,
  matching: matching,
};

// export { smartContracts, contractLab };
// const contractLab = "l";
export { ContractLab };
