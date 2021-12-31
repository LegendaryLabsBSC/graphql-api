import { Module } from '@nestjs/common';
import { LegendOffspringService } from './legend-offspring.service';
import { LegendOffspringResolver } from './legend-offspring.resolver';
import { TotalNFTSupplyService } from '../total-nft-supply/total-nft-supply.service';
import { LegendMetadataService } from '../legend-metadata/legend-metadata.service';

@Module({
  providers: [
    LegendOffspringService,
    LegendOffspringResolver,
    LegendMetadataService,
    TotalNFTSupplyService,
  ],
})
export class LegendOffspringModule {}
