import { Injectable } from '@nestjs/common';
import { LegendOffspring } from './legend-offspring.model';
import { TotalNFTSupplyService } from '../total-nft-supply/total-nft-supply.service';
import { LegendMetadataService } from '../legend-metadata/legend-metadata.service';
import { contractLab as lab } from 'src/contract-lab/contract-lab.service';

@Injectable()
export class LegendOffspringService {
  constructor(
    private readonly totalNFTSupplyService: TotalNFTSupplyService,
    private readonly legendMetadataService: LegendMetadataService,
  ) {}
  async fetchLegendOffspring(id: string): Promise<LegendOffspring> {
    const legendOffspring: any = {};
    const offspring: string[] = [];

    const totalSupply: bigint = (
      await this.totalNFTSupplyService.fetchTotalNFTSupply()
    ).total;

    for (let i = 1; i <= totalSupply; i++) {
      const childId = i.toString();
      if ((await lab.nft.isParentOf(id, childId)) === true)
        offspring.push(childId);
    }

    legendOffspring['offspring'] = offspring;

    return legendOffspring;
  }
}
