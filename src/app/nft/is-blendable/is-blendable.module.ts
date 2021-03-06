import { Module } from '@nestjs/common';
import { BlendingRulesService } from '../blending-rules/blending-rules.service';
import { IsBlendableService } from './is-blendable.service';
import { IsBlendableResolver } from './is-blendable.resolver';

@Module({
  providers: [IsBlendableService, IsBlendableResolver, BlendingRulesService],
  exports: [IsBlendableService]
})
export class IsBlendableModule {}
