import { Resolver, Query } from '@nestjs/graphql';
import { RejuvenationRules } from './rejuvenation-rules.model';
import { RejuvenationRulesService } from './rejuvenation-rules.service';

@Resolver()
export class RejuvenationRulesResolver {
  constructor(private readonly rejuvenationRulesService: RejuvenationRulesService) { }

  @Query((returns) => RejuvenationRules)
  async fetchRejuvenationRules() {
    return await this.rejuvenationRulesService.fetchRejuvenationRules();
  }
}
