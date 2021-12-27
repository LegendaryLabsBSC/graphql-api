import { Resolver, Query, Args } from '@nestjs/graphql';
import { ChildContractsService } from './child-contracts.service';
import { ChildContracts } from './child-contracts.model';

@Resolver()
export class ChildContractsResolver {
  constructor(private readonly childContractsService: ChildContractsService) {}

  @Query((returns) => ChildContracts)
  async fetchChildContracts() {
    return this.childContractsService.fetchChildContracts();
  }
}
