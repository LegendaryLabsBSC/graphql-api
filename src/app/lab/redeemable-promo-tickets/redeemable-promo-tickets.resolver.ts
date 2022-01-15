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
    @Args('id') id: string,
    @Args('address') address: string,
  ) {
    return await this.redeemableTicketsService.fetchRedeemablePromoTickets(
      id,
      address,
    );
  }

  @Query((returns) => [RedeemablePromoTickets])
  async allPromoTicketsByUser(@Args('address') address: string) {
    return await this.redeemableTicketsService.fetchAllRedeemablePromoTickets(
      address,
    );
  }
}
