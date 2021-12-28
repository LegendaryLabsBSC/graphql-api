import { Injectable } from '@nestjs/common';
import { LegendMetadata } from './legend-metadata.model';
import { contractLab as lab } from 'src/contract-lab/contract-lab.service';

@Injectable()
export class LegendMetadataService {

  nonExistentLegend: any = {
    id: "0",
    season: "Invalid Legend ID",
    prefix: "Invalid Legend ID",
    postfix: "Invalid Legend ID",
    parent1: "0",
    parent2: "0",
    birthday: "0",
    blendingInstancesUsed: "0",
    totalOffspring: "0",
    legendCreator: "Invalid Legend ID",
    isLegendary: false,
    isHatched: false,
    isDestroyed: false
  }

  parseData(data: LegendMetadata): LegendMetadata {
    const metadata: any = {};

    const keys = Object.keys(data).slice(12, 24);
    keys.splice(4, 1, 'parent1', 'parent2');

    const values = `${data}`.split(',', 13);

    keys.forEach((key: any, index) => {
      metadata[key] = values[index];
    });

    return metadata;

  }

  async fetchLegendMetadata(id: string): Promise<LegendMetadata> {
    let legendData: any = {}

    try {
      legendData = await lab.nft.fetchLegendMetadata(id)
    } catch (error) {
      // throw new ApolloError('Legend ID Does Not Exist ', 'MY_ERROR_CODE');
      return this.nonExistentLegend
    }

    const legendMetadata: LegendMetadata = this.parseData(legendData);

    return legendMetadata;
  }
}
