import { Module } from '@nestjs/common';
import { AllPromoTicketsService } from './all-promo-tickets.service';
import { AllPromoTicketsResolver } from './all-promo-tickets.resolver';
import { RedeemablePromoTicketsService } from '../redeemable-promo-tickets/redeemable-promo-tickets.service';

@Module({
  providers: [
    AllPromoTicketsService,
    AllPromoTicketsResolver,
    RedeemablePromoTicketsService,
  ],
})
export class AllPromoTicketsModule {}
