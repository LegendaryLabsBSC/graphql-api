import { Resolver, Query, Args } from '@nestjs/graphql';
import { PromoEventService } from './promo-event.service';
import { PromoEvent } from './promo-event.model';

@Resolver()
export class PromoEventResolver {
  constructor(private readonly promoEventService: PromoEventService) {}

  @Query((returns) => PromoEvent)
  async promoEvent(@Args('id') id: string) {
    return await this.promoEventService.fetchPromoEvent(id);
  }

  @Query((returns) => [PromoEvent])
  async allPromoEvents(@Args('filter') filter: string) {
    return await this.promoEventService.fetchAllPromoEvents(filter);
  }
}
