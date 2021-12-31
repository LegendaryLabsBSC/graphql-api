import { Resolver, Query, Args } from '@nestjs/graphql';
import { LegendMetadataService } from './legend-metadata.service';
import { LegendMetadata } from './legend-metadata.model';

@Resolver()
export class LegendMetadataResolver {
  constructor(private readonly legendMetadataService: LegendMetadataService) { }

  @Query((returns) => LegendMetadata)
  async legendMetadata(@Args('id', { type: () => String }) id: string) {
    return await this.legendMetadataService.fetchLegendMetadata(id)
  }
}
