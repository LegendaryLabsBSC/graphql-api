import { Injectable } from '@nestjs/common';
import { TotalNFTSupply } from './total-nft-supply.model';
import { contractLab as lab } from 'src/contract-lab/contract-lab.service';

@Injectable()
export class TotalNFTSupplyService {
  async fetchTotalNFTSupply(): Promise<TotalNFTSupply> {
    const totalNFTSupply: TotalNFTSupply = {
      total: Number(await lab.nft.totalSupply()),
    };

    return totalNFTSupply;
  }
}
