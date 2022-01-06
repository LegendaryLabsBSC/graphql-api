import { Module } from '@nestjs/common';
import { PaymentsPendingService } from './payments-pending.service';
import { PaymentsPendingResolver } from './payments-pending.resolver';

@Module({
  providers: [PaymentsPendingService, PaymentsPendingResolver],
})
export class PaymentsPendingModule {}
