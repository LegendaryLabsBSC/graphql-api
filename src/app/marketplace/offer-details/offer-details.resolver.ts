import { Resolver, Query, Args } from '@nestjs/graphql';
import { OfferDetailsService } from './offer-details.service';
import { OfferDetails } from './offer-details.model';

@Resolver()
export class OfferDetailsResolver {
  constructor(private readonly offerDetailsService: OfferDetailsService) {}

  @Query((returns) => OfferDetails)
  async offerDetails(@Args('id') id: string) {
    return await this.offerDetailsService.fetchOfferDetails(id);
  }
}
