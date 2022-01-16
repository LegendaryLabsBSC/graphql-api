import { Injectable } from '@nestjs/common';
import { BlendingSlotsUsed } from './blending-slots-used.model';
import { BlendingRulesService } from '../blending-rules/blending-rules.service';
import { contractLab as lab } from 'src/contract-lab/contract-lab.service';

@Injectable()
export class BlendingSlotsUsedService {
  constructor(private readonly blendingRulesService: BlendingRulesService) {}
  async fetchBlendingSlotsUsed(id: string): Promise<BlendingSlotsUsed> {
    const blendingSlotCount: bigint = await lab.admin.fetchBlendingCount(id);

    const maxBlendingSlotCount: number = (
      await this.blendingRulesService.fetchBlendingRules()
    ).blendingLimit;

    const blendingSlotsUsed: BlendingSlotsUsed = {
      blendingSlotsUsed: Number(blendingSlotCount),
      maxBlendingSlots: maxBlendingSlotCount,
      figure: `${blendingSlotCount}/${maxBlendingSlotCount}`,
    };

    return blendingSlotsUsed;
  }
}
