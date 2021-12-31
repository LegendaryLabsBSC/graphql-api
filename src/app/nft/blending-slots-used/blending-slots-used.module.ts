import { Module } from '@nestjs/common';
import { BlendingSlotsUsedService } from './blending-slots-used.service';
import { BlendingSlotsUsedResolver } from './blending-slots-used.resolver';
import { BlendingRulesService } from '../blending-rules/blending-rules.service';

@Module({
  providers: [BlendingSlotsUsedService, BlendingSlotsUsedResolver, BlendingRulesService],
})
export class BlendingSlotsUsedModule {}
