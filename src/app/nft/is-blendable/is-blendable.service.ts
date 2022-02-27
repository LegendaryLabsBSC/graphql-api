import { Injectable } from '@nestjs/common';
import { IsBlendable } from './is-blendable.model';
import { contractLab as lab } from 'src/contract-lab/contract-lab.service';
import { BlendingRulesService } from '../blending-rules/blending-rules.service';
import { BlendingRules } from '../blending-rules/blending-rules.model';

@Injectable()
export class IsBlendableService {
  constructor(private readonly blendingRulesService: BlendingRulesService) {}
  async fetchIsBlendable(id: string): Promise<IsBlendable> {
    let isBlendable: IsBlendable;

    const isHatched = await lab.admin.isHatched(id);
    if (isHatched === false) {
      isBlendable = {
        blendable: false,
        unableReason: 'Legend NFT Not Hatched',
      };

      return isBlendable;
    }

    const blendingSlotsUsed: bigint = await lab.admin.fetchBlendingCount(id);
    const { blendingLimit }: BlendingRules =
      await this.blendingRulesService.fetchBlendingRules();

    if (blendingSlotsUsed >= blendingLimit) {
      isBlendable = {
        blendable: false,
        unableReason:
          'Max Blending Slots Used: Legend needs rejuvenation before blending again.',
      };

      return isBlendable;
    }

    isBlendable = {
      blendable: true,
    };

    return isBlendable;
  }
}
