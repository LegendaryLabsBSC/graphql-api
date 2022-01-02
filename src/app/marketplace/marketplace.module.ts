import { Module } from '@nestjs/common';
import { MarketplaceService } from './marketplace.service';
import { MarketplaceResolver } from './marketplace.resolver';
import { MarketplaceRulesModule } from './marketplace-rules/marketplace-rules.module';
import { LegendListingModule } from './legend-listing/legend-listing.module';
import { AuctionDetailsModule } from './auction-details/auction-details.module';

@Module({
  providers: [MarketplaceService, MarketplaceResolver],
  imports: [MarketplaceRulesModule, LegendListingModule, AuctionDetailsModule]
})
export class MarketplaceModule { }
