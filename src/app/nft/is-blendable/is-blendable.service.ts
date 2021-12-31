import { Injectable } from '@nestjs/common';
import { IsBlendable } from './is-blendable.model';
import { contractLab as lab } from 'src/contract-lab/contract-lab.service';
import { BlendingRulesService } from '../blending-rules/blending-rules.service';

@Injectable()
export class IsBlendableService {
  constructor(private readonly blendingRulesService: BlendingRulesService) {}
  async fetchIsBlendable(id: string): Promise<IsBlendable> {
    const isBlendable: any = {};

    if ((await lab.admin.isHatched(id)) === false) {
      isBlendable['isBlendable'] = false;
      isBlendable['unableReason'] = 'Legend NFT Not Hatched';

      return isBlendable;
    }

    const blendingSlotsUsed: bigint = await lab.admin.fetchBlendingCount(id);
    const maxBlendingSlotsUsed: bigint = (
      await this.blendingRulesService.fetchBlendingRules()
    ).blendingLimit;

    if (blendingSlotsUsed < maxBlendingSlotsUsed) {
      isBlendable['isBlendable'] = true;
    } else {
      isBlendable['isBlendable'] = false;
      isBlendable['unableReason'] =
        'Max Blending Slots Used: Legend needs rejuvenation before blending again.';
    }

    return isBlendable;
  }
}
