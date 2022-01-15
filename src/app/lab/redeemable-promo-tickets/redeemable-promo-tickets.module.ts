import { Module } from '@nestjs/common';
import { RedeemablePromoTicketsService } from './redeemable-promo-tickets.service';
import { RedeemablePromoTicketsResolver } from './redeemable-promo-tickets.resolver';

@Module({
  providers: [RedeemablePromoTicketsService, RedeemablePromoTicketsResolver],
})
export class RedeemablePromoTicketsModule {}
