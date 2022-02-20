import { Injectable } from '@nestjs/common';
import { LegendNFT } from './legend-nft.model';
import { LegendMetadataService } from '../legend-metadata/legend-metadata.service';
import { LegendURIService } from '../legend-uri/legend-uri.service';
import { LegendMetadata } from '../legend-metadata/legend-metadata.model';
import { LegendURI } from '../legend-uri/legend-uri.model';
import { contractLab as lab } from 'src/contract-lab/contract-lab.service';
import { ethers } from 'ethers';

@Injectable()
export class LegendNFTService {
  constructor(
    private readonly legendMetadataService: LegendMetadataService,
    private readonly legendURIService: LegendURIService,
  ) {}

  async fetchLegendNFT(id: string): Promise<LegendNFT> {
    const legendMetadata: LegendMetadata =
      await this.legendMetadataService.fetchLegendMetadata(id);

    const legendURI: LegendURI = await this.legendURIService.fetchLegendURI(id);

    const legendNFT: LegendNFT = { ...legendMetadata, ...legendURI };

    return legendNFT;
  }

  // //todo: ! make filters ; all ; alive ; legendary ; destoryed ;; etc
  async fetchAllLegendNFTs(filter: string): Promise<LegendNFT[]> {
    const allLegends: LegendNFT[] = [];

    const totalSupply: bigint = await lab.nft.totalSupply();

    for (let i = 1; i <= totalSupply; i++) {
      const legendNFT = await this.fetchLegendNFT(`${i}`);

      allLegends.push(legendNFT);
    }

    return allLegends;
  }

  async fetchLegendNFTsByOwner(account: string): Promise<LegendNFT[]> {
    const userLegends: LegendNFT[] = [];

    const verifiedAddress: string = ethers.utils.getAddress(account);
    const balance: bigint = await lab.nft.balanceOf(verifiedAddress);

    for (let i = 0; i < balance; i++) {
      const legendId: string = (
        await lab.nft.tokenOfOwnerByIndex(account, `${i}`)
      ).toString();

      const legendNFT: LegendNFT = await this.fetchLegendNFT(legendId);

      userLegends.push(legendNFT);
    }

    return userLegends;
  }
}
