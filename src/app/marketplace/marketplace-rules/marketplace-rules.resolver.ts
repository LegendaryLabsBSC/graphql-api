import { Resolver, Query } from '@nestjs/graphql';
import { MarketplaceRules } from './marketplace-rules.model';
import { MarketplaceRulesService } from './marketplace-rules.service';

@Resolver()
export class MarketplaceRulesResolver {
  constructor(private readonly marketplaceRulesService: MarketplaceRulesService) { }

  @Query((returns) => MarketplaceRules)
  async marketplaceRules() {
    return await this.marketplaceRulesService.fetchMarketplaceRules();
  }
}
