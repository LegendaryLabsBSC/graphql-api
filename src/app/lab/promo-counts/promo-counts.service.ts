import { Injectable } from '@nestjs/common';
import { PromoCounts } from './promo-counts.model';
import { contractLab as lab } from 'src/contract-lab/contract-lab.service';

@Injectable()
export class PromoCountsService {
  async fetchPromoCounts(): Promise<PromoCounts> {
    const countsData: bigint[] = await lab.admin.fetchPromoCounts();

    const totalPromos = countsData[0].toString();
    const promosClosed = countsData[1].toString();

    const promoCounts: PromoCounts = {
      totalPromos: parseInt(totalPromos),
      promosClosed: parseInt(promosClosed),
    };

    return promoCounts;
  }
}
