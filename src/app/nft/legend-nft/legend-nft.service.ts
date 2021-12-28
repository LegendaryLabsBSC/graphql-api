import { Injectable } from '@nestjs/common';
import { LegendNFT } from './legend-nft.model';
import { contractLab as lab } from 'src/contract-lab/contract-lab.service';
import { LegendMetadataService } from '../legend-metadata/legend-metadata.service';
import { LegendURIService } from '../legend-uri/legend-uri.service';

@Injectable()
export class LegendNFTService {
  constructor(
    private readonly legendMetadataService: LegendMetadataService,
    private readonly legendURIService: LegendURIService,
  ) {}

  async fetchLegendNFT(id: string): Promise<LegendNFT> {
    const legendNFT: any = {};

    legendNFT['metadata'] =
      await this.legendMetadataService.fetchLegendMetadata(id);

    legendNFT['uri'] = await this.legendURIService.fetchLegendURI(id);

    return legendNFT;
  }
}
