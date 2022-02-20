import { Resolver, Query, Args, ResolveField, Parent } from '@nestjs/graphql';
import { LegendNFTService } from './legend-nft.service';
import { LegendNFT } from './legend-nft.model';
import { OwnerOfLegendService } from '../owner-of-legend/owner-of-legend.service';

@Resolver((of) => LegendNFT)
export class LegendNFTResolver {
  constructor(
    private readonly legendNFTService: LegendNFTService,
    private readonly ownerOfLegendService: OwnerOfLegendService,
  ) {}

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

  @ResolveField()
  async ownerOf(@Parent() legendNFT: LegendNFT) {
    const { id } = legendNFT;
    return (await this.ownerOfLegendService.fetchOwnerOfLegend(`${id}`))
      .address;
  }
}
