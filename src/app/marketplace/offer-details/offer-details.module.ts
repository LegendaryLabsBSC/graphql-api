import { Module } from '@nestjs/common';
import { OfferDetailsService } from './offer-details.service';
import { OfferDetailsResolver } from './offer-details.resolver';

@Module({
  providers: [OfferDetailsService, OfferDetailsResolver],
})
export class OfferDetailsModule {}
