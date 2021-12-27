import { Injectable } from '@nestjs/common';
import { PromoEvent } from '../promo-event/promo-event.model';
import { PromoEventService } from '../promo-event/promo-event.service';
import { contractLab as lab } from 'src/contract-lab/contract-lab.service';
import { PromoCounts } from '../promo-counts/promo-counts.model';

@Injectable()
export class AllPromoEventsService {
  constructor(private readonly promoEventService: PromoEventService) { }

  async filterData(filter: string, data: PromoEvent): Promise<boolean> {
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

    for (let i = 0; i < Number(countsData[0]); i++) {
      const promoIndex: string = (i + 1).toString();

      const promoEvent: PromoEvent =
        await this.promoEventService.fetchPromoEvent(promoIndex);

      if ((await this.filterData(filter, promoEvent)) === true)
        allPromos.push(promoEvent);
    }

    return allPromos;
  }
}
