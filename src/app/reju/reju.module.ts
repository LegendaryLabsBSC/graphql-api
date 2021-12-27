import { Module } from '@nestjs/common';
import { RejuService } from './reju.service';
import { RejuResolver } from './reju.resolver';
import { RejuvenationRulesModule } from './rejuvenation-rules/rejuvenation-rules.module';

@Module({
  providers: [RejuService, RejuResolver],
  imports: [RejuvenationRulesModule]
})
export class RejuModule { }
