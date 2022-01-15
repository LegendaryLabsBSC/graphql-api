import { Resolver, Query, Args } from '@nestjs/graphql';
import { LegendMatchingService } from './legend-matching.service';
import { LegendMatching } from './legend-matching.model';

@Resolver()
export class LegendMatchingResolver {
  constructor(private readonly legendMatchingService: LegendMatchingService) {}

  @Query((returns) => LegendMatching)
  async legendMatching(@Args('id') id: string) {
    return await this.legendMatchingService.fetchLegendMatching(id);
  }

  // @Query((returns) => [LegendMatching])
  // async allLegendMatchings(
  //   @Args('filter') filter: string,
  //   @Args('status', { nullable: true }) status?: string,
  // ) {
  //   return (
  //     (await this.legendMatchingService.fetchAllLegendMatchings(
  //       filter,
  //       status,
  //     )) || []
  //   );
  // }
}
