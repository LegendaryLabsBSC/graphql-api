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

    return promoEvent;
  }

  async fetchPromoEvent(id: string): Promise<PromoEvent> {
    let promoEvent: PromoEvent;

    promoEvent = await lab.admin.fetchPromoEvent(id);
    promoEvent = this.parseData(promoEvent);

    return promoEvent;
  }

  filterData(filter: string, data: PromoEvent): boolean {
    switch (filter) {
      case 'all':
        return true;
      case 'open':
        if (String(data.isPromoClosed) === 'false') return true;
        break;
      case 'closed':
        if (String(data.isPromoClosed) === 'true') return true;
        break;
      default:
        return false;
    }
  }

  async fetchAllPromoEvents(filter: string): Promise<PromoEvent[]> {
    const allPromos: PromoEvent[] = [];

    const countsData: PromoCounts = await lab.admin.fetchPromoCounts();

    for (let i = 0; i < countsData[0]; i++) {
      const promoIndex: string = (i + 1).toString();

      const promoEvent: PromoEvent = await this.fetchPromoEvent(promoIndex);

      if (this.filterData(filter, promoEvent) === true)
        allPromos.push(promoEvent);
    }

    return allPromos;
  }
}
