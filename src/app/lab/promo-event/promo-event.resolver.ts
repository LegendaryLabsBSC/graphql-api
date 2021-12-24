import { Resolver, Query, Args } from '@nestjs/graphql';
import { PromoEventService } from './promo-event.service';
import { PromoEvent } from './promo-event.model';

@Resolver()
export class PromoEventResolver {
  constructor(private readonly promoEventService: PromoEventService) {}

  @Query((returns) => PromoEvent)
  async fetchPromoEvent(@Args('id', { type: () => String }) id: string) {
    return await this.promoEventService.fetchPromoEvent(id);
  }
}
