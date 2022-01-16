import { Injectable } from '@nestjs/common';
import { IsBlendable } from './is-blendable.model';
import { contractLab as lab } from 'src/contract-lab/contract-lab.service';
import { BlendingRulesService } from '../blending-rules/blending-rules.service';

@Injectable()
export class IsBlendableService {
  constructor(private readonly blendingRulesService: BlendingRulesService) {}
  async fetchIsBlendable(id: string): Promise<IsBlendable> {
    if ((await lab.admin.isHatched(id)) === false) {
      const isBlendable: IsBlendable = {
        blendable: false,
        unableReason: 'Legend NFT Not Hatched',
      };

      return isBlendable;
    }

    let blendable: boolean;
    let unableReason: string;

    const blendingSlotsUsed: bigint = await lab.admin.fetchBlendingCount(id);
    const maxBlendingSlotsUsed: number = (
      await this.blendingRulesService.fetchBlendingRules()
    ).blendingLimit;

    // todo: make sure max+1/max is not possible
    if (blendingSlotsUsed < maxBlendingSlotsUsed) {
      blendable = true;
    } else {
      blendable = false;
      unableReason =
        'Max Blending Slots Used: Legend needs rejuvenation before blending again.';
    }

    const isBlendable: IsBlendable = {
      blendable: blendable,
      unableReason: unableReason,
    };

    return isBlendable;
  }
}
