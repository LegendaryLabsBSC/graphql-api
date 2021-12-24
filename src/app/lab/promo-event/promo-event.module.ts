import { Module } from '@nestjs/common';
import { PromoEventService } from './promo-event.service';
import { PromoEventResolver } from './promo-event.resolver';

@Module({
  providers: [PromoEventService, PromoEventResolver],
})
export class PromoEventModule {}
