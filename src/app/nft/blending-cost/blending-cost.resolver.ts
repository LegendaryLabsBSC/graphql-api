import { Resolver, Query, Args } from '@nestjs/graphql';
import { BlendingCostService } from './blending-cost.service';
import { BlendingCost } from './blending-cost.model';

@Resolver()
export class BlendingCostResolver {
  constructor(private readonly blendingCostService: BlendingCostService) {}

  @Query((returns) => BlendingCost)
  async blendingCost(
    @Args('p1') p1: string,
    @Args('p2', { nullable: true }) p2?: string,
  ) {
    return await this.blendingCostService.fetchBlendingCost(p1, p2);
  }
}
