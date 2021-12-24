import { Resolver, Query, Args } from '@nestjs/graphql';
import { PromoEventService } from './promo-event.service';
import { PromoEventType } from './promo-event.dto';

@Resolver()
export class PromoEventResolver {
  constructor(private readonly promoEventService: PromoEventService) {}

  @Query((returns) => PromoEventType)
  async fetchPromoEvent(@Args('id', { type: () => String }) id: string) {
    return await this.promoEventService.fetchPromoEvent(id);
  }
}
