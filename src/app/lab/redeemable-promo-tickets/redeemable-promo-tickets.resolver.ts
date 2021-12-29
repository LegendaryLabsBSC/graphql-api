import { Resolver, Query, Args } from '@nestjs/graphql';
import { RedeemablePromoTicketsService } from './redeemable-promo-tickets.service';
import { RedeemablePromoTickets } from './redeemable-promo-tickets.model';

@Resolver()
export class RedeemablePromoTicketsResolver {
  constructor(
    private readonly redeemableTicketsService: RedeemablePromoTicketsService,
  ) {}

  @Query((returns) => RedeemablePromoTickets)
  async fetchRedeemablePromoTickets(
    @Args('id') id: string,
    @Args('address') address: string,
  ) {
    return await this.redeemableTicketsService.fetchRedeemablePromoTickets(
      id,
      address,
    );
  }

  @Query((returns) => [RedeemablePromoTickets])
  async fetchAllPromoTickets(
    @Args('address', { type: () => String }) address: string,
  ) {
    return (
      (await this.redeemableTicketsService.fetchAllRedeemablePromoTickets(
        address,
      )) || []
    );
  }
}
