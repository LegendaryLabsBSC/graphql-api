import { Module } from '@nestjs/common';
import { NFTService } from './nft.service';
import { NFTResolver } from './nft.resolver';
import { BlendingRulesModule } from './blending-rules/blending-rules.module';
import { LegendMetadataModule } from './legend-metadata/legend-metadata.module';
import { LegendURIModule } from './legend-uri/legend-uri.module';
import { LegendNFTModule } from './legend-nft/legend-nft.module';

@Module({
  providers: [NFTService, NFTResolver],
  imports: [
    BlendingRulesModule,
    // LegendMetadataModule,
    // LegendURIModule,
    LegendNFTModule,
  ],
})
export class NFTModule {}
