import { Resolver, Query } from '@nestjs/graphql';
import { PromoCountsService } from './promo-counts.service';
import { PromoCounts } from './promo-counts.model';

@Resolver()
export class PromoCountsResolver {
  constructor(private readonly promoCountsService: PromoCountsService) {}

  @Query((returns) => PromoCounts)
  async promoCounts() {
    return await this.promoCountsService.fetchPromoCounts();
  }
}
