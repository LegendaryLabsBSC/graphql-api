import { Injectable } from '@nestjs/common';
import { RedeemablePromoTickets } from '../redeemable-promo-tickets/redeemable-promo-tickets.model';
import { RedeemablePromoTicketsService } from '../redeemable-promo-tickets/redeemable-promo-tickets.service';
import { PromoEvent } from '../promo-event/promo-event.model';
import { contractLab as lab } from 'src/contract-lab/contract-lab.service';
import { PromoCounts } from '../promo-counts/promo-counts.model';

@Injectable()
export class AllPromoTicketsService {
  constructor(
    private readonly redeemablePromoTicketsService: RedeemablePromoTicketsService,
  ) { }

  async fetchAllRedeemablePromoTickets(
    address: string,
  ): Promise<RedeemablePromoTickets[]> {
    let allPromoTickets: RedeemablePromoTickets[] = [];

    const countsData: PromoCounts = await lab.admin.fetchPromoCounts();

    for (let i = 0; i < Number(countsData[0]); i++) {
      const promoIndex: string = (i + 1).toString();

      const promoEvent: PromoEvent = await lab.admin.fetchPromoEvent(
        promoIndex,
      );

      const isPromoClosed: boolean = promoEvent.isPromoClosed;

      if (isPromoClosed === false) {
        const redeemableTickets: RedeemablePromoTickets =
          await this.redeemablePromoTicketsService.fetchRedeemablePromoTickets(
            promoIndex,
            address,
          );

        allPromoTickets.push(redeemableTickets);
      }
    }

    return allPromoTickets;
  }
}
