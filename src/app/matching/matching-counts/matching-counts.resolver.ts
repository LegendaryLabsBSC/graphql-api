import { Resolver, Query } from '@nestjs/graphql';
import { MatchingCountsService } from './matching-counts.service';
import { MatchingCounts } from './matching-counts.model';

@Resolver()
export class MatchingCountsResolver {
  constructor(private readonly matchingCountsService: MatchingCountsService) {}

  @Query((returns) => MatchingCounts)
  async matchingCounts() {
    return await this.matchingCountsService.fetchMatchingCounts();
  }
}
