import { Injectable } from '@nestjs/common';
import { PromoEvent } from './promo-event.model';
import { contractLab as lab } from 'src/contract-lab/contract-lab.service';

export class PromoData {
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

export async function parseData(data: PromoData): Promise<PromoEvent> {
  let promoData: any = {};

  const keys = Object.keys(data).slice(9);
  const values = `${data}`.split(',');

  keys.forEach((value: any, index) => {
    promoData[value] = values[index];
  });

  return promoData;
}

@Injectable()
export class PromoEventService {
  async fetchPromoEvent(id: string): Promise<PromoEvent> {
    const promoData: PromoData = await lab.admin.fetchPromoEvent(id);
    const promoEvent: PromoEvent = await parseData(promoData);

    return promoEvent;
  }
}
