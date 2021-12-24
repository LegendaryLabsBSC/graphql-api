import { Resolver, Query, Args } from '@nestjs/graphql';
import { ChildContractsService } from './child-contracts.service';
import { ChildContractsType } from './child-contracts.dto';

@Resolver()
export class ChildContractsResolver {
  constructor(private readonly childContractsService: ChildContractsService) {}

  @Query((returns) => ChildContractsType)
  async fetchChildContracts() {
    return this.childContractsService.fetchChildContracts();
  }
}
