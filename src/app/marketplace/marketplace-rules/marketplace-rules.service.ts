import { Injectable } from '@nestjs/common';
import { MarketplaceRules } from './marketplace-rules.model';
import { contractLab as lab } from 'src/contract-lab/contract-lab.service';

@Injectable()
export class MarketplaceRulesService {
  parseData(data: MarketplaceRules): MarketplaceRules {
    const marketplaceRules: MarketplaceRules = {
      royaltyFee: `${data[0].toString()}%`,
      marketPlaceFee: `${data[1].toString()}%`,
      offerDuration: data[2].toString(),
      auctionExtension: data[3].toString(),
      auctionDurations: data[4].map((duration: bigint) => duration.toString()),
    };

    return marketplaceRules;
  }

  async fetchMarketplaceRules(): Promise<MarketplaceRules> {
    const rulesData: any = await lab.marketplace.fetchMarketplaceRules();
    const marketplaceRules: MarketplaceRules = this.parseData(rulesData);

    return marketplaceRules;
  }
}
