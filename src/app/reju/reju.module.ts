import { Module } from '@nestjs/common';
import { RejuService } from './reju.service';
import { RejuResolver } from './reju.resolver';
import { RejuvenationRulesModule } from './rejuvenation-rules/rejuvenation-rules.module';
import { PodDetailsModule } from './pod-details/pod-details.module';

@Module({
  providers: [RejuService, RejuResolver],
  imports: [RejuvenationRulesModule, PodDetailsModule],
})
export class RejuModule {}
