import { Resolver, Query, Args } from '@nestjs/graphql';
import { IsHatchableService } from './is-hatchable..service';
import { IsHatchable } from './is-hatchable.model';

@Resolver()
export class IsHatchableResolver {
  constructor(private readonly isHatchableService: IsHatchableService) {}

  @Query((returns) => IsHatchable)
  async isHatchable(@Args('id', { type: () => String }) id: string) {
    return await this.isHatchableService.fetchIsHatchable(id);
  }
}
