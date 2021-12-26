import { Resolver, Query, Args } from '@nestjs/graphql';
import { AllPromoEventsService } from './all-promo-events.service';
import { PromoEvent } from '../promo-event/promo-event.model';

@Resolver()
export class AllPromoEventsResolver {
  constructor(private readonly allPromoEventsService: AllPromoEventsService) {}

  @Query((returns) => [PromoEvent])
  async fetchAllPromoEvents(
    @Args('filter', { type: () => String }) filter: string,
  ) {
    return (await this.allPromoEventsService.fetchAllPromoEvents(filter)) || [];
  }
}
