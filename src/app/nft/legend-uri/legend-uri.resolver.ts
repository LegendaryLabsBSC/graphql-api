import { Resolver, Query, Args } from '@nestjs/graphql';
import { LegendURIService } from './legend-uri.service';
import { LegendURI } from './legend-uri.model';

@Resolver()
export class LegendURIResolver {
  constructor(private readonly legendURIService: LegendURIService) {}

  @Query((returns) => LegendURI)
  async legendURI(@Args('id') id: string) {
    return await this.legendURIService.fetchLegendURI(id);
  }
}
