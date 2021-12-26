import { Module } from '@nestjs/common';
import { AllPromoEventsService } from './all-promo-events.service';
import { AllPromoEventsResolver } from './all-promo-events.resolver';

@Module({
  providers: [AllPromoEventsService, AllPromoEventsResolver]
})
export class AllPromoEventsModule {}
