import { Resolver, Query, Args } from '@nestjs/graphql';
import { AllPromoTicketsService } from './all-promo-tickets.service';
import { RedeemablePromoTickets } from '../redeemable-promo-tickets/redeemable-promo-tickets.model';

@Resolver()
export class AllPromoTicketsResolver {
  constructor(
    private readonly allPromoTicketsService: AllPromoTicketsService,
  ) {}

  @Query((returns) => [RedeemablePromoTickets])
  async fetchAllPromoTickets(
    @Args('address', { type: () => String }) address: string,
  ) {
    return (
      (await this.allPromoTicketsService.fetchAllRedeemablePromoTickets(
        address,
      )) || []
    );
  }
}
