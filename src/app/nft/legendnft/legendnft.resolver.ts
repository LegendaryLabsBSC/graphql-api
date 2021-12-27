import { Resolver, Query, Args } from '@nestjs/graphql';
import { LegendNFTService } from './legendnft.service';
import { LegendType } from './legendnft.dto';
import { InjectEthersProvider } from 'nestjs-ethers';

@Resolver()
export class LegendNFTResolver {
  constructor(private readonly legendnftService: LegendNFTService) {}

  @Query((returns) => LegendType)
  async findAllLegends(@Args('id', { type: () => String }) id: string) {
    return await this.legendnftService.findAllLegends(id);
  }

  @Query((returns) => String)
  async foo() {
    return this.legendnftService.foo();
  }
}
