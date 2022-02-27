import { Resolver, Query, Args, ResolveField, Parent } from '@nestjs/graphql';
import { LegendNFTService } from './legend-nft.service';
import { LegendNFT } from './legend-nft.model';
import { OwnerOfLegendService } from '../owner-of-legend/owner-of-legend.service';
import { IsHatchableService } from '../is-hatchable/is-hatchable.service';
import { IsBlendableService } from '../is-blendable/is-blendable.service';

@Resolver((of) => LegendNFT)
export class LegendNFTResolver {
  constructor(
    private readonly legendNFTService: LegendNFTService,
    private readonly ownerOfLegendService: OwnerOfLegendService,
    private readonly isHatchableService: IsHatchableService,
    private readonly isBlendableService: IsBlendableService,
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

    const { address } = await this.ownerOfLegendService.fetchOwnerOfLegend(
      `${id}`,
    );
    return address;
  }

  @ResolveField()
  async isHatchable(@Parent() legendNFT: LegendNFT) {
    const { id } = legendNFT;

    const { hatchable } = await this.isHatchableService.fetchIsHatchable(
      `${id}`,
    );

    return hatchable;
  }

  @ResolveField()
  async isBlendable(@Parent() legendNFT: LegendNFT) {
    const { id } = legendNFT;

    const { blendable } = await this.isBlendableService.fetchIsBlendable(
      `${id}`,
    );

    return blendable;
  }
}
