import { Resolver, Query } from '@nestjs/graphql';
import { TokensPendingService } from './tokens-pending.service';
import { TokensPending } from './tokens-pending.model';

@Resolver()
export class TokensPendingResolver {
  constructor(private readonly tokensPendingService: TokensPendingService) {}

  @Query((returns) => TokensPending)
  async tokensPending() {
    return await this.tokensPendingService.fetchTokensPending();
  }
}
