import { Resolver, Query } from '@nestjs/graphql';
import { TokenDetailsService } from './token-details.service';
import { TokenDetails } from './token-details.model';

@Resolver()
export class TokenDetailsResolver {
  constructor(private readonly tokenDetailsService: TokenDetailsService) {}

  @Query((returns) => TokenDetails)
  async tokenDetails() {
    return await this.tokenDetailsService.fetchTokenDetails();
  }
}
