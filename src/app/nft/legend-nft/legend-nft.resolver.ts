import { Resolver, Query, Args } from '@nestjs/graphql';
import { LegendNFTService } from './legend-nft.service';
import { LegendNFT } from './legend-nft.model';
// all active destroyed
@Resolver()
export class LegendNFTResolver {
  constructor(private readonly legendNFTService: LegendNFTService) {}

  @Query((returns) => LegendNFT)
  async legendNFT(@Args('id') id: string) {
    return await this.legendNFTService.fetchLegendNFT(id);
  }

  @Query((returns) => [LegendNFT])
  async allLegendNFTs(@Args('filter') filter: string) {
    return await this.legendNFTService.fetchAllLegendNFTs(filter);
  }

  @Query((returns) => [LegendNFT])
  async legendNFTsByOwner(@Args('address') address: string) {
    return await this.legendNFTService.fetchLegendNFTsByOwner(address);
  }
}
