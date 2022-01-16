import { Injectable } from '@nestjs/common';
import { BlendingRules } from './blending-rules.model';
import { contractLab as lab } from 'src/contract-lab/contract-lab.service';

@Injectable()
export class BlendingRulesService {
  parseData(data: BlendingRules): BlendingRules {
    const parseKinBlendingLevel = (blendingLevel: number): string => {
      const kinBlendingLevel: any = {
        0: 'Legends Can Not Blend With Parent Or Sibling Legends',
        1: 'Legends Can Blend With Parent Legends',
        2: 'Legends Can Blend With Parent Or Sibling Legends',
      };

      return kinBlendingLevel[blendingLevel];
    };

    const blendingRules: BlendingRules = {
      kinBlendingLevel: parseKinBlendingLevel(data[0]),
      blendingLimit: Number(data[1]),
      baseBlendingCost: Number(data[2]),
      incubationPeriod: Number(data[3]),
    };

    return blendingRules;
  }

  async fetchBlendingRules(): Promise<BlendingRules> {
    const rulesData: any = await lab.nft.fetchBlendingRules();
    const blendingRules: BlendingRules = this.parseData(rulesData);

    return blendingRules;
  }
}
