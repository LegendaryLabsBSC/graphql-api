import { Resolver, Query } from '@nestjs/graphql';
import { LegendNFTService } from './legendnft.service';
import { LegendType } from './legendnft.dto';

@Resolver()
export class LegendNFTResolver {
  constructor(private readonly legendnftService: LegendNFTService) {}

  // @Query((returns) => [LegendType])
  // async findAllLegends() {
  //   return this.legendnftService.findAllLegends();
  // }

  @Query((returns) => String)
  async foo() {
    return this.legendnftService.foo();
  }


}
