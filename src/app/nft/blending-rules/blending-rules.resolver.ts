import { Resolver, Query } from '@nestjs/graphql';
import { BlendingRules } from './blending-rules.model';
import { BlendingRulesService } from './blending-rules.service';

@Resolver()
export class BlendingRulesResolver {
  constructor(private readonly blendingRulesService: BlendingRulesService) {}

  @Query((returns) => BlendingRules)
  async blendingRules() {
    return await this.blendingRulesService.fetchBlendingRules();
  }
}
