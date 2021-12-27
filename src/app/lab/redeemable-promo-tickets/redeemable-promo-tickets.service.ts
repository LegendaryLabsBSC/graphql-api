import { Injectable } from '@nestjs/common';
import { RedeemablePromoTickets } from './redeemable-promo-tickets.model';
import { contractLab as lab } from 'src/contract-lab/contract-lab.service';


@Injectable()
export class RedeemablePromoTicketsService {
  async parseData(data: RedeemablePromoTickets): Promise<RedeemablePromoTickets> {
    const redeemableTickets: any = {};

    redeemableTickets['promoName'] = data.promoName;
    redeemableTickets['ticketsCount'] = data.ticketsCount.toString();

    return redeemableTickets;
  }

  async fetchRedeemablePromoTickets(
    id: string,
    address: string,
  ): Promise<RedeemablePromoTickets> {
    let ticketsCount: bigint;
    let promoName: string;

    try {
      ticketsCount = await lab.admin.fetchRedeemableTickets(id, address);
      promoName = (await lab.admin.fetchPromoEvent(id)).promoName;
    } catch (error) {
      ticketsCount = BigInt(0);
      promoName = 'Promo Event Closed';
    }

    const redeemableTickets: RedeemablePromoTickets = await this.parseData({
      promoName,
      ticketsCount,
    });

    return redeemableTickets;
  }
}
