import { Module } from '@nestjs/common';
import { LegendMetadataService } from './legend-metadata.service';
import { LegendMetadataResolver } from './legend-metadata.resolver';

@Module({
  providers: [LegendMetadataService, LegendMetadataResolver]
})
export class LegendMetadataModule { }
