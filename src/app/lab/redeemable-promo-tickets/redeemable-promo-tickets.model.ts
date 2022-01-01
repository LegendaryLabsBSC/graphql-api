import { ObjectType, Field, PickType } from '@nestjs/graphql';
import { PromoEvent } from '../promo-event/promo-event.model';

@ObjectType()
export class RedeemablePromoTickets extends PickType(PromoEvent, [
  'promoName',
] as const) {
  @Field()
  promoId: string;

  @Field()
  promoName: string;

  @Field((type) => String)
  ticketsCount: bigint;

  @Field((type) => String, { nullable: true })
  promoClaimed?: boolean;
}
