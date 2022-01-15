import { Injectable } from '@nestjs/common';
import { RedeemablePromoTickets } from './redeemable-promo-tickets.model';
import { PromoCounts } from '../promo-counts/promo-counts.model';
import { PromoEvent } from '../promo-event/promo-event.model';
import { contractLab as lab } from 'src/contract-lab/contract-lab.service';
import { PromoEventService } from '../promo-event/promo-event.service';
/**
 * todo?:
 * can import other services but tends to slow things
 * down more than calling directly from contract
 */

@Injectable()
export class RedeemablePromoTicketsService {
  async fetchPromoTicketData(
    promoId: string,
    address: string,
  ): Promise<[string, string]> {
    let tickets: bigint;
    let promoName: string;

    try {
      promoName = (await lab.admin.fetchPromoEvent(promoId)).promoName;
      tickets = await lab.admin.fetchRedeemableTickets(promoId, address);
    } catch (e) {
      if (e.reason === 'Promo Event Has Closed') {
        promoName = 'Promo Event Closed';
        tickets = BigInt(0);
      } else {
        throw new Error('Unknown API Error Occurred');
      }
    }

    const ticketCount: string = tickets.toString();

    return [promoName, ticketCount];
  }

  async fetchRedeemablePromoTickets(
    promoId: string,
    address: string,
  ): Promise<RedeemablePromoTickets> {
    const [promoName, ticketCount] = await this.fetchPromoTicketData(
      promoId,
      address,
    );

    const redeemableTickets: RedeemablePromoTickets = {
      promoId: parseInt(promoId),
      promoName: promoName,
      ticketCount: parseInt(ticketCount),
      promoClaimed: await lab.admin.isClaimed(promoId, address),
    };

    return redeemableTickets;
  }

  async fetchAllRedeemablePromoTickets(
    address: string,
  ): Promise<RedeemablePromoTickets[]> {
    const allPromoTickets: RedeemablePromoTickets[] = [];

    const countsData: PromoCounts = await lab.admin.fetchPromoCounts();

    for (let i = 1; i <= countsData[0]; i++) {
      const promoEvent: PromoEvent = await lab.admin.fetchPromoEvent(`${i}`);

      const isPromoClosed: boolean = promoEvent.isPromoClosed;

      if (isPromoClosed === false) {
        const redeemableTickets: RedeemablePromoTickets =
          await this.fetchRedeemablePromoTickets(`${i}`, address);

        allPromoTickets.push(redeemableTickets);
      }
    }

    return allPromoTickets;
  }
}
