import { Resolver, Query, Args } from '@nestjs/graphql';
import { IsListableService } from './is-listable.service';
import { IsListable } from './is-listable.model';

@Resolver()
export class IsListableResolver {
  constructor(private readonly isListableService: IsListableService) {}

  @Query((returns) => IsListable)
  async isListable(
    @Args('id') id: string,
    @Args('address') address: string,
  ) {
    return await this.isListableService.fetchIsListable(id, address);
  }
}
