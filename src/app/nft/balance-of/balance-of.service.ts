import { Injectable } from '@nestjs/common';
import { NFTBalanceOf } from './balance-of.model';
import { contractLab as lab } from 'src/contract-lab/contract-lab.service';

@Injectable()
export class BalanceOfService {
  async fetchBalanceOf(address: string): Promise<NFTBalanceOf> {
    let balanceOf: NFTBalanceOf = {
      balance: Number(await lab.nft.balanceOf(address)),
    };

    return balanceOf;
  }
}

// async fetchLegendNFTsByOwner(account: string): Promise<LegendNFT[]> {
//   const userLegends: LegendNFT[] = [];

//   const verifiedAddress: string = ethers.utils.getAddress(account);
//   const balance: bigint = await lab.nft.balanceOf(verifiedAddress);

//   for (let i = 0; i < balance; i++) {
//     const legendId: string = (
//       await lab.nft.tokenOfOwnerByIndex(account, `${i}`)
//     ).toString();

//     const legendNFT: LegendNFT = await this.fetchLegendNFT(legendId);

//     userLegends.push(legendNFT);
//   }

//   return userLegends;
// }
// }
