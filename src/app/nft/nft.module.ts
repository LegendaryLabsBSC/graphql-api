import { Module } from '@nestjs/common';
import { NftService } from './nft.service';
import { NftResolver } from './nft.resolver';
import { BlendingRulesModule } from './blending-rules/blending-rules.module';
import { LegendMetadataModule } from './legend-metadata/legend-metadata.module';
import { LegendURIModule } from './legend-uri/legend-uri.module';


@Module({
  providers: [NftService, NftResolver],
  imports: [BlendingRulesModule, LegendMetadataModule, LegendURIModule]
})
export class NftModule { }
