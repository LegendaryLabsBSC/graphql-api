import { Resolver, Query, Args } from '@nestjs/graphql';
import { BalanceOfService } from './balance-of.service';
import { NFTBalanceOf } from './balance-of.model';

@Resolver()
export class BalanceOfResolver {
  constructor(private readonly balanceOfService: BalanceOfService) {}

  @Query((returns) => NFTBalanceOf)
  async NFTbalanceOf(@Args('address') address: string) {
    return await this.balanceOfService.fetchBalanceOf(address);
  }
}
