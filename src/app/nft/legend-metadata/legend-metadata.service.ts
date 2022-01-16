import { Injectable } from '@nestjs/common';
import { LegendMetadata } from './legend-metadata.model';
import { contractLab as lab } from 'src/contract-lab/contract-lab.service';

@Injectable()
export class LegendMetadataService {
  nonexistentLegend: any = {
    id: 0,
    season: 'Nonexistent Legend ID',
    prefix: 'Nonexistent Legend ID',
    postfix: 'Nonexistent Legend ID',
    parent1: 0,
    parent2: 0,
    birthday: 'Unborn',
    blendingInstancesUsed: 0,
    totalOffspring: 0,
    legendCreator: 'Nonexistent Legend ID',
    isLegendary: false,
    isHatched: false,
    isDestroyed: false,
  };

  parseData(data: any): LegendMetadata {
    //todo: ! convert birthday to calendar date ; based off block, non exactly Unix time

    const metadata: LegendMetadata = {
      id: Number(data.id),
      season: data.season,
      prefix: data.prefix,
      postfix: data.postfix,
      parent1: Number(data.parents[0]),
      parent2: Number(data.parents[1]),
      birthday: data.birthday.toString(),
      blendingInstancesUsed: Number(data.blendingInstancesUsed),
      totalOffspring: Number(data.totalOffspring),
      legendCreator: data.legendCreator,
      isLegendary: data.isLegendary,
      isHatched: data.isHatched,
      isDestroyed: data.isDestroyed,
    };

    return metadata;
  }

  async fetchLegendMetadata(id: string): Promise<LegendMetadata> {
    let legendData: any;

    try {
      legendData = await lab.nft.fetchLegendMetadata(id);
    } catch (e) {
      if (e.reason === 'missing revert data in call exception') {
        const legendMetadata: LegendMetadata = this.nonexistentLegend;

        return legendMetadata;
      } else {
        throw new Error('Unknown API Error Occurred');
      }
    }

    const legendMetadata: LegendMetadata = this.parseData(legendData);

    return legendMetadata;
  }
}
