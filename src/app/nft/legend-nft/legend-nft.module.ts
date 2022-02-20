import { Module } from '@nestjs/common';
import { LegendNFTService } from './legend-nft.service';
import { LegendNFTResolver } from './legend-nft.resolver';
import { LegendMetadataService } from '../legend-metadata/legend-metadata.service';
import { LegendURIService } from '../legend-uri/legend-uri.service';
import { OwnerOfLegendModule } from '../owner-of-legend/owner-of-legend.module';

@Module({
  providers: [
    LegendNFTService,
    LegendNFTResolver,
    LegendMetadataService,
    LegendURIService,
  ],
  imports: [OwnerOfLegendModule],
  exports:[LegendNFTService]
})
export class LegendNFTModule {}
