import { Module } from '@nestjs/common';
import { LegendOffspringService } from './legend-offspring.service';
import { LegendOffspringResolver } from './legend-offspring.resolver';
import { TotalNFTSupplyService } from '../total-nft-supply/total-nft-supply.service';

@Module({
  providers: [
    LegendOffspringService,
    LegendOffspringResolver,
    TotalNFTSupplyService,
  ],
})
export class LegendOffspringModule {}
