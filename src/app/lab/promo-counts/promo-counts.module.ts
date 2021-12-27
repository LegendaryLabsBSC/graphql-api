import { Module } from '@nestjs/common';
import { PromoCountsService } from './promo-counts.service';
import { PromoCountsResolver } from './promo-counts.resolver';

@Module({
  providers: [PromoCountsService, PromoCountsResolver]
})
export class PromoCountsModule {}
