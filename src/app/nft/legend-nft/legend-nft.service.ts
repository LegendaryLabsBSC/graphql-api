import { Injectable } from '@nestjs/common';
import { LegendNFT } from './legend-nft.model';
import { contractLab as lab } from 'src/contract-lab/contract-lab.service';
import { LegendMetadataService } from '../legend-metadata/legend-metadata.service';
import { LegendURIService } from '../legend-uri/legend-uri.service';
import { LegendMetadata } from '../legend-metadata/legend-metadata.model';
import { LegendURI } from '../legend-uri/legend-uri.model';

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

    const legendNFT = { ...legendMetadata, ...legendURI };

    return legendNFT;
  }

  // async fetchAllLegendNFTs(filter: string): Promise<LegendNFT[]> {
  //   const legendNFT: any = {};

  //   legendNFT['metadata'] =
  //     await this.legendMetadataService.fetchLegendMetadata(id);

  //   legendNFT['uri'] = await this.legendURIService.fetchLegendURI(id);

  //   return legendNFT;
  // }
}
