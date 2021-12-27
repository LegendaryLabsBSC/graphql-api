import { Module } from '@nestjs/common';
import { MatchingService } from './matching.service';
import { MatchingResolver } from './matching.resolver';

@Module({
  providers: [MatchingService, MatchingResolver]
})
export class MatchingModule {}
