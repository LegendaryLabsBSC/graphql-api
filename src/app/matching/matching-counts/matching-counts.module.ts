import { Module } from '@nestjs/common';
import { MatchingCountsService } from './matching-counts.service';
import { MatchingCountsResolver } from './matching-counts.resolver';

@Module({
  providers: [MatchingCountsService, MatchingCountsResolver],
})
export class MatchingCountsModule {}
