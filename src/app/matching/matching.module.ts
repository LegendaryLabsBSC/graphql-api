import { Module } from '@nestjs/common';
import { MatchingService } from './matching.service';
import { MatchingResolver } from './matching.resolver';
import { LegendMatchingModule } from './legend-matching/legend-matching.module';
import { TokensPendingModule } from './tokens-pending/tokens-pending.module';
import { MatchingCountsModule } from './matching-counts/matching-counts.module';

@Module({
  providers: [MatchingService, MatchingResolver],
  imports: [LegendMatchingModule, TokensPendingModule, MatchingCountsModule],
})
export class MatchingModule {}
