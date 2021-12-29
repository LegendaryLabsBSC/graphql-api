import { Injectable } from '@nestjs/common';
import { MarketplaceRules } from './marketplace-rules.model';
import { contractLab as lab } from 'src/contract-lab/contract-lab.service';

@Injectable()
export class MarketplaceRulesService {
  parseData(data: MarketplaceRules): MarketplaceRules {
    const marketplaceRules: any = {};

    marketplaceRules['royaltyFee'] = data[0].toString();
    marketplaceRules['marketPlaceFee'] = data[1].toString();
    marketplaceRules['offerDuration'] = data[2].toString();
    marketplaceRules['auctionExtension'] = data[3].toString();
    marketplaceRules['auctionDurations'] = data[4].map((duration: bigint) =>
      duration.toString(),
    );

    return marketplaceRules;
  }

  async fetchMarketplaceRules(): Promise<MarketplaceRules> {
    const rulesData: MarketplaceRules =
      await lab.marketplace.fetchMarketplaceRules();
    const marketplaceRules: MarketplaceRules = this.parseData(rulesData);

    return marketplaceRules;
  }
}
