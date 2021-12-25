import { Resolver, Query, Args } from '@nestjs/graphql';
import { PromoCountsService } from './promo-counts.service';
import { PromoCounts } from './promo-counts.model';

@Resolver()
export class PromoCountsResolver {
  constructor(private readonly promoCountsService: PromoCountsService) {}

  @Query((returns) => PromoCounts)
  async fetchPromoCounts() {
    return await this.promoCountsService.fetchPromoCounts();
  }
}
