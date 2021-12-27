import { Module } from '@nestjs/common';
import { RejuvenationRulesService } from './rejuvenation-rules.service';
import { RejuvenationRulesResolver } from './rejuvenation-rules.resolver';

@Module({
  providers: [RejuvenationRulesService, RejuvenationRulesResolver],
})
export class RejuvenationRulesModule {}
