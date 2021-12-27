import { Module } from '@nestjs/common';
import { MarketplaceRulesService } from './marketplace-rules.service';
import { MarketplaceRulesResolver } from './marketplace-rules.resolver';

@Module({
  providers: [MarketplaceRulesService, MarketplaceRulesResolver]
})
export class MarketplaceRulesModule { }
