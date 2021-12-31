import { Resolver, Query } from '@nestjs/graphql';
import { TotalNFTSupplyService } from './total-nft-supply.service';
import { TotalNFTSupply } from './total-nft-supply.model';

@Resolver()
export class TotalNFTSupplyResolver {
  constructor(private readonly totalNFTSupplyService: TotalNFTSupplyService) {}

  @Query((returns) => TotalNFTSupply)
  async totalNFTSupply() {
    return await this.totalNFTSupplyService.fetchTotalNFTSupply();
  }

  // todo: add in other metadata total-nft queries; number of unhatched/hatched, in markets destroyed etc
}
