import { Module } from '@nestjs/common';
import { LegendURIService } from './legend-uri.service';
import { LegendURIResolver } from './legend-uri.resolver';

@Module({
  providers: [LegendURIService, LegendURIResolver],
  exports: [LegendURIService]
})
export class LegendURIModule { }
