import { ObjectType, Field, PickType } from '@nestjs/graphql';
import { PromoEvent } from '../promo-event/promo-event.model';

@ObjectType()
export class RedeemablePromoTickets extends PickType(PromoEvent, [
  'promoName',
] as const) {
  @Field()
  promoName: String;

  @Field((type) => String)
  ticketsCount: BigInt;
}
