import { ObjectType, Field, Int, PickType } from '@nestjs/graphql';
import { PromoEvent } from '../promo-event/promo-event.model';

@ObjectType()
export class RedeemablePromoTickets extends PickType(PromoEvent, [
  'promoName',
] as const) {
  @Field((type) => Int)
  promoId: number;

  @Field()
  promoName: string;

  @Field((type) => Int)
  ticketCount: number;

  @Field()
  promoClaimed: boolean;
}
