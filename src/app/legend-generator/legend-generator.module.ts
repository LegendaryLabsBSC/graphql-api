import { Module } from '@nestjs/common';
import { LegendGeneratorService } from './legend-generator.service';
import { LegendGeneratorResolver } from './legend-generator.resolver';
import { LegendURIModule } from '../nft/legend-uri/legend-uri.module';
import { PinataModule } from '../ipfs/pinata/pinata.module';

@Module({
  providers: [LegendGeneratorService, LegendGeneratorResolver],
  imports: [LegendURIModule, PinataModule],
})
export class LegendGeneratorModule {}
