import { Injectable } from '@nestjs/common';
import { PromoEvent } from './promo-event.model';
import { PromoCounts } from '../promo-counts/promo-counts.model';
import { contractLab as lab } from 'src/contract-lab/contract-lab.service';

@Injectable()
export class PromoEventService {
  parseData(data: PromoEvent): PromoEvent {
    const promoEvent: any = {};

    const keys = Object.keys(data).slice(9);
    const values = `${data}`.split(',');

    keys.forEach((key: string, index) => {
      promoEvent[key] = values[index];
    });

    promoEvent['lengthInDays'] =
      (parseInt(promoEvent.expireTime) - parseInt(promoEvent.startTime)) /
      86400; // One day in seconds

    return promoEvent;
  }

  async fetchPromoEvent(id: string): Promise<PromoEvent> {
    let promoEvent: PromoEvent;

    promoEvent = await lab.admin.fetchPromoEvent(id);
    promoEvent = this.parseData(promoEvent);

    let maxTickets: bigint;

    try {
      maxTickets = (await lab.admin.fetchMaxTicketsDispensable(id)).toString();
    } catch (e) {
      if (e.reason === 'Promo Event Does Not Have A Max Ticket Limit') {
        maxTickets = null;
      } else {
        throw new Error('Unknown API Error Occurred');
      }
    } finally {
      promoEvent['maxTicketsDispensable'] = maxTickets;
    }

    promoEvent['promoLegendsIncubated'] = await lab.admin.isPromoIncubated(id);

    return promoEvent;
  }

  async fetchAllPromoEvents(filter: string): Promise<PromoEvent[]> {
    const filterData = (filter: string, data: PromoEvent): boolean => {
      switch (filter) {
        case 'all':
          return true;
        case 'open':
          if (data.isPromoClosed.toString() === 'false') return true; //todo
          break;
        case 'closed':
          if (data.isPromoClosed.toString() === 'true') return true;
          break;
        default:
          return false;
      }
    };

    const allPromos: PromoEvent[] = [];

    const countsData: PromoCounts = await lab.admin.fetchPromoCounts();

    for (let i = 1; i <= countsData[0]; i++) {
      const promoIndex: string = i.toString();

      const promoEvent: PromoEvent = await this.fetchPromoEvent(promoIndex);

      if (filterData(filter, promoEvent) === true) allPromos.push(promoEvent);
    }

    return allPromos;
  }
}
