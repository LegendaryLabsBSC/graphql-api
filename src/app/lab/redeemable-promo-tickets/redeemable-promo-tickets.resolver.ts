import { Resolver, Query, Args } from '@nestjs/graphql';
import { RedeemablePromoTicketsService } from './redeemable-promo-tickets.service';
import { RedeemablePromoTickets } from './redeemable-promo-tickets.model';

@Resolver()
export class RedeemablePromoTicketsResolver {
  constructor(
    private readonly redeemableTicketsService: RedeemablePromoTicketsService,
  ) {}

  @Query((returns) => RedeemablePromoTickets)
  async redeemablePromoTickets(
    @Args('id', { type: () => String }) id: string,
    @Args('address', { type: () => String }) address: string,
  ) {
    return await this.redeemableTicketsService.fetchRedeemablePromoTickets(
      id,
      address,
    );
  }

  @Query((returns) => [RedeemablePromoTickets])
  async allPromoTicketsByUser(
    @Args('address', { type: () => String }) address: string,
  ) {
    return (
      (await this.redeemableTicketsService.fetchAllRedeemablePromoTickets(
        address,
      )) || []
    );
  }
}
