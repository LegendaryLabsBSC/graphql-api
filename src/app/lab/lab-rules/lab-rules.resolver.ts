import { Resolver, Query } from '@nestjs/graphql';
import { LabRules } from './lab-rules.model';
import { LabRulesService } from './lab-rules.service';

@Resolver()
export class LabRulesResolver {
  constructor(private readonly labRulesService: LabRulesService) {}

  @Query((returns) => LabRules)
  async fetchLabRules() {
    return await this.labRulesService.fetchLabRules();
  }
}
