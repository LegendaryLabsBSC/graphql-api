import { Module } from '@nestjs/common';
import { AllPromoEventsService } from './all-promo-events.service';
import { AllPromoEventsResolver } from './all-promo-events.resolver';
import { PromoEventService } from '../promo-event/promo-event.service';

@Module({
  providers: [AllPromoEventsService, AllPromoEventsResolver, PromoEventService],
})
export class AllPromoEventsModule {}
