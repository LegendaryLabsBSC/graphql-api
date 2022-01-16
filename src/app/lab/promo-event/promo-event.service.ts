import { Injectable } from '@nestjs/common';
import { PromoEvent } from './promo-event.model';
import { PromoCountsService } from '../promo-counts/promo-counts.service';
import { contractLab as lab } from 'src/contract-lab/contract-lab.service';

@Injectable()
export class PromoEventService {
  constructor(private readonly promoCountsService: PromoCountsService) {}
  parseData(data: PromoEvent): PromoEvent {
    const promoEvent: any = {};

    promoEvent['promoName'] = data.promoName;
    promoEvent['promoId'] = data.promoId.toString();
    promoEvent['startTime'] = data.startTime.toString();
    promoEvent['expireTime'] = data.expireTime.toString();
    promoEvent['isUnrestricted'] = data.isUnrestricted;
    promoEvent['isTicketLimit'] = data.isUnrestricted;
    promoEvent['isPromoClosed'] = data.isPromoClosed;
    promoEvent['ticketsClaimed'] = data.ticketsClaimed.toString();
    promoEvent['ticketsRedeemed'] = data.ticketsRedeemed.toString();

    promoEvent['lengthInDays'] =
      (parseInt(promoEvent.expireTime) - parseInt(promoEvent.startTime)) /
      86400; // One day in seconds

    return promoEvent;
  }

  async fetchPromoEvent(id: string): Promise<PromoEvent> {
    const fetchMaxTickets = async (id: string): Promise<bigint> => {
      let maxTickets: bigint;

      try {
        maxTickets = (
          await lab.admin.fetchMaxTicketsDispensable(id)
        ).toString();
      } catch (e) {
        if (e.reason === 'Promo Event Does Not Have A Max Ticket Limit') {
          maxTickets = null;
        } else {
          throw new Error('Unknown API Error Occurred');
        }
      }

      return maxTickets;
    };

    const promoData = await lab.admin.fetchPromoEvent(id);

    const promoEvent: PromoEvent = this.parseData(promoData);

    promoEvent['maxTicketsDispensable'] = await fetchMaxTickets(id);
    promoEvent['legendsSkipIncubation'] = await lab.admin.isPromoIncubated(id);

    return promoEvent;
  }
  
  //todo: ? add 'expired' event filter
  async fetchAllPromoEvents(filter: string): Promise<PromoEvent[]> {
    const filterData = (filter: string, data: PromoEvent): boolean => {
      switch (filter) {
        case 'all':
          return true;
        case 'open':
          if (data.isPromoClosed === false) return true;
          break;
        case 'closed':
          if (data.isPromoClosed === true) return true;
          break;
        default:
          return false;
      }
    };

    const allPromos: PromoEvent[] = [];

    const totalPromos: number = (
      await this.promoCountsService.fetchPromoCounts()
    ).totalPromos;

    for (let i = 1; i <= totalPromos; i++) {
      const promoEvent: PromoEvent = await this.fetchPromoEvent(`${i}`);

      if (filterData(filter, promoEvent) === true) allPromos.push(promoEvent);
    }

    return allPromos;
  }
}
