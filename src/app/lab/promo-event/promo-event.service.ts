import { Injectable } from '@nestjs/common';
import { PromoEvent } from './promo-event.model';
import { contractLab as lab } from 'src/contract-lab/contract-lab.service';

export class PromoData {
  promoName: string;
  promoId: bigint;
  startTime: bigint;
  expireTime: bigint;
  isUnrestricted: boolean;
  isTicketLimit: boolean;
  isPromoClosed: boolean;
  ticketsClaimed: bigint;
  ticketsRedeemed: bigint;
}

export async function parseData(data: PromoData): Promise<PromoEvent> {
  const promoEvent: any = {};

  const keys = Object.keys(data).slice(9);
  const values = `${data}`.split(',');

  keys.forEach((value: string, index) => {
    promoEvent[value] = values[index];
  });

  return promoEvent;
}

@Injectable()
export class PromoEventService {
  async fetchPromoEvent(id: string): Promise<PromoEvent> {
    const promoData: PromoData = await lab.admin.fetchPromoEvent(id);
    const promoEvent: PromoEvent = await parseData(promoData);

    return promoEvent;
  }
}
