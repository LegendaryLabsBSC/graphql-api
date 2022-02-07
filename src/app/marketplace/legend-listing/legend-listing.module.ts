import { Module } from '@nestjs/common';
import { LegendListingService } from './legend-listing.service';
import { LegendListingResolver } from './legend-listing.resolver';
import { AuctionDetailsService } from '../auction-details/auction-details.service';
import { OfferDetailsService } from '../offer-details/offer-details.service';
import { LegendNFTModule } from 'src/app/nft/legend-nft/legend-nft.module';

@Module({
  providers: [
    LegendListingService,
    LegendListingResolver,
    AuctionDetailsService,
    OfferDetailsService,
  ],
  imports: [LegendNFTModule],
})
export class LegendListingModule {}
