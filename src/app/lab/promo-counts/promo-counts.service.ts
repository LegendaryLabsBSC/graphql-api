import { Injectable } from '@nestjs/common';
import { PromoCounts } from './promo-counts.model';
import { contractLab as lab } from 'src/contract-lab/contract-lab.service';

@Injectable()
export class PromoCountsService {
  async parseData(data: PromoCounts): Promise<PromoCounts> {
    const promoCounts: any = {};

    promoCounts['totalPromos'] = data[0].toString();
    promoCounts['promosClosed'] = data[1].toString();

    return promoCounts;
  }

  async fetchPromoCounts(): Promise<PromoCounts> {
    const countsData: PromoCounts = await lab.admin.fetchPromoCounts();
    const promoCounts: PromoCounts = await this.parseData(countsData);

    return promoCounts;
  }
}
