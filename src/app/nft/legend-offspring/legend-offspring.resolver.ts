import { Resolver, Query, Args } from '@nestjs/graphql';
import { LegendOffspringService } from './legend-offspring.service';
import { LegendOffspring } from './legend-offspring.model';

@Resolver()
export class LegendOffspringResolver {
  constructor(
    private readonly legendOffspringService: LegendOffspringService,
  ) {}

  @Query((returns) => LegendOffspring)
  async legendOffspring(@Args('id') id: string) {
    return await this.legendOffspringService.fetchLegendOffspring(id);
  }
}
