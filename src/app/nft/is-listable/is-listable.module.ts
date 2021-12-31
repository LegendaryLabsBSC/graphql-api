import { Module } from '@nestjs/common';
import { BlendingRulesService } from '../blending-rules/blending-rules.service';
import { IsListableService } from './is-listable.service';
import { IsListableResolver } from './is-listable-resolver';

@Module({
  providers: [IsListableService, IsListableResolver, BlendingRulesService],
})
export class IsListableModule {}
