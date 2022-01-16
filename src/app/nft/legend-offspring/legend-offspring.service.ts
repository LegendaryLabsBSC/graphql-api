import { Injectable } from '@nestjs/common';
import { LegendOffspring } from './legend-offspring.model';
import { TotalNFTSupplyService } from '../total-nft-supply/total-nft-supply.service';
import { contractLab as lab } from 'src/contract-lab/contract-lab.service';

@Injectable()
export class LegendOffspringService {
  constructor(private readonly totalNFTSupplyService: TotalNFTSupplyService) {}
  async fetchLegendOffspring(id: string): Promise<LegendOffspring> {
    const offspring: number[] = [];

    const totalSupply: number = (
      await this.totalNFTSupplyService.fetchTotalNFTSupply()
    ).total;

    for (let i = 1; i <= totalSupply; i++) {
      const childId = i.toString();

      if ((await lab.nft.isParentOf(id, childId)) === true)
        offspring.push(Number(i));
    }

    const legendOffspring: LegendOffspring = {
      offspringIds: offspring,
    };

    return legendOffspring;
  }
}
