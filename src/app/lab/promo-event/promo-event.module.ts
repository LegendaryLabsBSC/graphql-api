import { Module } from '@nestjs/common';
import { PromoEventService } from './promo-event.service';
import { PromoEventResolver } from './promo-event.resolver';
import { PromoCountsService } from '../promo-counts/promo-counts.service';

@Module({
  providers: [PromoEventService, PromoEventResolver, PromoCountsService],
})
export class PromoEventModule {}
