import { Resolver, Query, Args } from '@nestjs/graphql';
import { PaymentsPendingService } from './payments-pending.service';
import { PaymentsPending } from './payments-pending.model';

@Resolver()
export class PaymentsPendingResolver {
  constructor(private readonly paymentsPendingService: PaymentsPendingService) {}

  @Query((returns) => PaymentsPending)
  async paymentsPending(@Args('address') address: string) {
    return await this.paymentsPendingService.fetchPaymentsPending(address);
  }
}
