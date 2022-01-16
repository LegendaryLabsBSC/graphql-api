import { Resolver, Query, Args } from '@nestjs/graphql';
import { IsBlendableService } from './is-blendable.service';
import { IsBlendable } from './is-blendable.model';

@Resolver()
export class IsBlendableResolver {
  constructor(private readonly isBlendableService: IsBlendableService) {}

  @Query((returns) => IsBlendable)
  async isBlendable(@Args('id') id: string) {
    return await this.isBlendableService.fetchIsBlendable(id);
  }
}
