import { Injectable } from '@nestjs/common';
import { RedeemablePromoTickets } from './redeemable-promo-tickets.model';
import { contractLab as lab } from 'src/contract-lab/contract-lab.service';

export class TicketsData {
  promoName: string;
  ticketsCount: bigint;
}

@Injectable()
export class RedeemablePromoTicketsService {
  async parseData(data: TicketsData): Promise<RedeemablePromoTickets> {
    const redeemableTickets: any = {};

    redeemableTickets['promoName'] = data.promoName;
    redeemableTickets['ticketsCount'] = data.ticketsCount.toString();

    return redeemableTickets;
  }

  async fetchRedeemablePromoTickets(
    id: string,
    address: string,
  ): Promise<RedeemablePromoTickets> {
    const promoName: string = (await lab.admin.fetchPromoEvent(id)).promoName;

    const ticketsCount: bigint = await lab.admin.fetchRedeemableTickets(
      id,
      address,
    );

    const redeemableTickets: RedeemablePromoTickets = await this.parseData({
      promoName,
      ticketsCount,
    });

    return redeemableTickets;
  }
}
