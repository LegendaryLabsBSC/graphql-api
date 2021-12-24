import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PromoEvent, PromoEventDocument } from './promo-event.schema';
import { ContractLab as lab } from 'src/contract-lab/contract-lab.service';

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
  constructor(
    @InjectModel(PromoEvent.name)
    private promoEventModel: Model<PromoEventDocument>,
  ) {}

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
