import { Injectable } from '@nestjs/common';
import { PromoEvent } from './promo-event.model';
import { contractLab as lab } from 'src/contract-lab/contract-lab.service';


export async function parseData(data: PromoEvent): Promise<PromoEvent> {
  const promoEvent: any = {};

  const keys = Object.keys(data).slice(9);
  const values = `${data}`.split(',');

  keys.forEach((key: string, index) => {
    promoEvent[key] = values[index];
  });

  return promoEvent;
}

@Injectable()
export class PromoEventService {
  async fetchPromoEvent(id: string): Promise<PromoEvent> {
    const promoData: PromoEvent = await lab.admin.fetchPromoEvent(id);
    const promoEvent: PromoEvent = await parseData(promoData);

    return promoEvent;
  }
}
