import { Injectable } from '@nestjs/common';
import { RedeemablePromoTickets } from './redeemable-promo-tickets.model';
import { PromoCounts } from '../promo-counts/promo-counts.model';
import { PromoEvent } from '../promo-event/promo-event.model';
import { contractLab as lab } from 'src/contract-lab/contract-lab.service';

@Injectable()
export class RedeemablePromoTicketsService {
  parseData(data: RedeemablePromoTickets): RedeemablePromoTickets {
    const redeemableTickets: any = {};

    redeemableTickets['promoId'] = data.promoId;
    redeemableTickets['promoName'] = data.promoName;
    redeemableTickets['ticketsCount'] = data.ticketsCount.toString();

    return redeemableTickets;
  }

  async fetchRedeemablePromoTickets(
    promoId: string,
    address: string,
  ): Promise<RedeemablePromoTickets> {
    let ticketsCount: bigint;
    let promoName: string;

    try {
      ticketsCount = await lab.admin.fetchRedeemableTickets(promoId, address);
      promoName = (await lab.admin.fetchPromoEvent(promoId)).promoName;
    } catch (error) {
      ticketsCount = BigInt(0);
      promoName = 'Promo Event Closed';
    }

    const redeemableTickets: RedeemablePromoTickets = this.parseData({
      promoId,
      promoName,
      ticketsCount,
    });

    redeemableTickets['promoClaimed'] = (
      await lab.admin.isClaimed(promoId, address)
    ).toString();

    return redeemableTickets;
  }

  async fetchAllRedeemablePromoTickets(
    address: string,
  ): Promise<RedeemablePromoTickets[]> {
    let allPromoTickets: RedeemablePromoTickets[] = [];

    const countsData: PromoCounts = await lab.admin.fetchPromoCounts();

    for (let i = 1; i <= countsData[0]; i++) {
      const promoIndex: string = i.toString();

      const promoEvent: PromoEvent = await lab.admin.fetchPromoEvent(
        promoIndex,
      );

      // const isPromoClosed: boolean = promoEvent.isPromoClosed;
      const isPromoClosed: boolean = false

      if (isPromoClosed === false) {
        const redeemableTickets: RedeemablePromoTickets =
          await this.fetchRedeemablePromoTickets(promoIndex, address);

        allPromoTickets.push(redeemableTickets);
      }
    }

    return allPromoTickets;
  }
}
