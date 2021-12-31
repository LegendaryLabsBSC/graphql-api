import { Module } from '@nestjs/common';
import { LegendNFTService } from './legend-nft.service';
import { LegendNFTResolver } from './legend-nft.resolver';
import { LegendMetadataService } from '../legend-metadata/legend-metadata.service';
import { LegendURIService } from '../legend-uri/legend-uri.service';

@Module({
  providers: [
    LegendNFTService,
    LegendNFTResolver,
    LegendMetadataService,
    LegendURIService,
  ],
})
export class LegendNFTModule {}
