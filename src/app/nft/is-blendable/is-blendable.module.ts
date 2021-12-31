import { Module } from '@nestjs/common';
import { BlendingRulesService } from '../blending-rules/blending-rules.service';
import { IsBlendableService } from './is-blendable.service';
import { IsBlendableResolver } from './is-blendableresolver';

@Module({
  providers: [IsBlendableService, IsBlendableResolver, BlendingRulesService],
})
export class IsBlendableModule {}
