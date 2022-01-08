import { Resolver, Query, Args } from '@nestjs/graphql';
import { AuctionDetailsService } from './auction-details.service';
import { AuctionDetails } from './auction-details.model';

@Resolver()
export class AuctionDetailsResolver {
  constructor(private readonly auctionDetailsService: AuctionDetailsService) {}

  @Query((returns) => AuctionDetails)
  async auctionDetails(@Args('id') id: string) {
    return await this.auctionDetailsService.fetchAuctionDetails(id);
  }
}
