import { Injectable } from '@nestjs/common';
import { BlendingCost } from './blending-cost.model';
import { BlendingRulesService } from '../blending-rules/blending-rules.service';
import { contractLab as lab } from 'src/contract-lab/contract-lab.service';

@Injectable()
export class BlendingCostService {
  constructor(private readonly blendingRulesService: BlendingRulesService) {}
  async fetchBlendingCost(p1: string, p2?: string): Promise<BlendingCost> {
    const blendingCost: any = {};
    let cost: number;

    const p1Cost: bigint = await lab.nft.fetchBlendingCost(p1);

    if (p2 != null) {
      const p2Cost: bigint = await lab.nft.fetchBlendingCost(p2);

      cost = (Number(p1Cost) + Number(p2Cost)) / 2;
    } else {
      cost = Number(p1Cost);
    }

    blendingCost['cost'] = `${cost}`;
    blendingCost['ezCost'] = `${cost} LGND Tokens`;

    return blendingCost;
  }
}
