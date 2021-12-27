import { Module } from '@nestjs/common';
import { MarketplaceService } from './marketplace.service';
import { MarketplaceResolver } from './marketplace.resolver';
import { MarketplaceRulesModule } from './marketplace-rules/marketplace-rules.module';

@Module({
  providers: [MarketplaceService, MarketplaceResolver],
  imports: [MarketplaceRulesModule]
})
export class MarketplaceModule { }
