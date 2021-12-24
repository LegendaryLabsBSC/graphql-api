import { Injectable } from '@nestjs/common';
import { PromoEvent } from './promo-event.model';
import { contractLab as lab } from 'src/contract-lab/contract-lab.service';

class PromoData {
  promoName: String;
  promoId: BigInt;
  startTime: BigInt;
  expireTime: BigInt;
  isUnrestricted: Boolean;
  isTicketLimit: Boolean;
  isPromoClosed: Boolean;
  ticketsClaimed: BigInt;
  ticketsRedeemed: BigInt;
}
@Injectable()
export class PromoEventService {
  async parseData(data: PromoData): Promise<PromoEvent> {
    let promoData: any = {};

    const keys = Object.keys(data).slice(9);
    const values = `${data}`.split(',', 10);

    keys.forEach((value: any, index) => {
      promoData[value] = values[index];
    });

    return promoData;
  }

  async fetchPromoEvent(id: string): Promise<PromoEvent> {
    const promoData: PromoData = await lab.admin.fetchPromoEvent(id);
    const promoEvent: PromoEvent = await this.parseData(promoData);

    return promoEvent;
  }
}
