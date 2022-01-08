import { Module } from '@nestjs/common';
import { AuctionDetailsService } from './auction-details.service';
import { AuctionDetailsResolver } from './auction-details.resolver';

@Module({
  providers: [AuctionDetailsService, AuctionDetailsResolver],
})
export class AuctionDetailsModule {}
