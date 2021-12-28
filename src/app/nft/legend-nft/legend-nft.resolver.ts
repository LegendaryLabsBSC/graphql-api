import { Resolver, Query, Args } from '@nestjs/graphql';
import { LegendNFTService } from './legend-nft.service';
import { LegendNFT } from './legend-nft.model';

@Resolver()
export class LegendNFTResolver {
  constructor(private readonly legendNFTService: LegendNFTService) { }

  @Query((returns) => LegendNFT)
  async legendNFT(@Args('id', { type: () => String }) id: string) {
    return await this.legendNFTService.fetchLegendNFT(id)
  }
}
