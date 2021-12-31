import { Resolver, Query, Args } from '@nestjs/graphql';
import { OwnerOfLegendService } from './owner-of-legend.service';
import { OwnerOfLegend } from './owner-of-legend.model';

@Resolver()
export class OwnerOfLegendResolver {
  constructor(private readonly ownerOfLegendService: OwnerOfLegendService) {}

  @Query((returns) => OwnerOfLegend)
  async ownerOfLegend(@Args('id') id: string) {
    return await this.ownerOfLegendService.fetchOwnerOfLegend(id);
  }
}
