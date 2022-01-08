import { Module } from '@nestjs/common';
import { MarketplaceService } from './marketplace.service';
import { MarketplaceResolver } from './marketplace.resolver';
import { MarketplaceRulesModule } from './marketplace-rules/marketplace-rules.module';
import { LegendListingModule } from './legend-listing/legend-listing.module';
import { AuctionDetailsModule } from './auction-details/auction-details.module';
import { OfferDetailsModule } from './offer-details/offer-details.module';
import { PaymentsPendingModule } from './payments-pending/payments-pending.module';

@Module({
  providers: [MarketplaceService, MarketplaceResolver],
  imports: [
    MarketplaceRulesModule,
    LegendListingModule,
    AuctionDetailsModule,
    OfferDetailsModule,
    PaymentsPendingModule,
  ],
})
export class MarketplaceModule {}
