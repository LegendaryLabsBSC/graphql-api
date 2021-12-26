import { Injectable } from '@nestjs/common';
import {
  BlendingRules,
  LabRules,
  MarketplaceRules,
  RejuvenationRules,
} from './lab-rules.model';
import { contractLab as lab } from 'src/contract-lab/contract-lab.service';

@Injectable()
export class LabRulesService {
  async parseData(data: LabRules): Promise<LabRules> {
    let labRules: any = {};

    console.log(data, 'gerk');

    const keys = Object.keys(data).slice();
    const values = `${data}`.split(',');

    console.log(keys, 'kt')
    console.log(values, 'vt')

    keys.forEach((value: string, index) => {
      labRules[value] = values[index];
    });

    return labRules;
  }

  async fetchLabRules(): Promise<LabRules> {
    const blendingRules: BlendingRules = await lab.nft.fetchBlendingRules();

    const marketplaceRules: MarketplaceRules =
      await lab.marketplace.fetchMarketplaceRules();

    const rejuvenationRules: RejuvenationRules =
      await lab.reju.fetchRejuvenationRules();

    const labRules: LabRules = {
      blendingRules,
      marketplaceRules,
      rejuvenationRules,
    };

    this.parseData(labRules);

    return labRules;
  }
}
