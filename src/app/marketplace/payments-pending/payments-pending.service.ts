import { Injectable } from '@nestjs/common';
import { PaymentsPending } from './payments-pending.model';
import { contractLab as lab } from 'src/contract-lab/contract-lab.service';

@Injectable()
export class PaymentsPendingService {
  async fetchPaymentsPending(address: string): Promise<PaymentsPending> {
    const paymentsPending: PaymentsPending = {
      listingPayments: (
        await lab.marketplace.fetchPaymentsPending(address)
      ).toString(),
      royaltiesAccrued: (
        await lab.marketplace.fetchRoyaltiesAccrued(address)
      ).toString(),
    };

    //todo:parse as eth values

    return paymentsPending;
  }
}
