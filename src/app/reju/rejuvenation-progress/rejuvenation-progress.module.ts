import { Module } from '@nestjs/common';
import { RejuvenationProgressService } from './rejuvenation-progress.service';
import { RejuvenationProgressResolver } from './rejuvenation-progress.resolver';

@Module({
  providers: [RejuvenationProgressService, RejuvenationProgressResolver],
})
export class RejuvenationProgressModule {}
