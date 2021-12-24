import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PromoEventService } from './promo-event.service';
import { PromoEventResolver } from './promo-event.resolver';
import { PromoEvent, PromoEventSchema } from './promo-event.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PromoEvent.name, schema: PromoEventSchema },
    ]),
  ],
  providers: [PromoEventService, PromoEventResolver],
})
export class PromoEventModule {}
