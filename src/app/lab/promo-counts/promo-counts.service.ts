import { Injectable } from '@nestjs/common';
import { PromoCounts } from './promo-counts.model';
import { contractLab as lab } from 'src/contract-lab/contract-lab.service';

@Injectable()
export class PromoCountsService {
  async fetchPromoCounts(): Promise<PromoCounts> {
    const countsData: bigint[] = await lab.admin.fetchPromoCounts();

    const promoCounts: PromoCounts = {
      totalPromos: countsData[0].toString(),
      promosClosed: countsData[1].toString(),
    };

    return promoCounts;
  }
}
