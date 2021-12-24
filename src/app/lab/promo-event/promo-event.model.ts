import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class PromoEvent {
  @Field()
  promoName: String;

  @Field((type) => String)
  promoId: BigInt;

  @Field((type) => String)
  startTime: BigInt;

  @Field((type) => String)
  expireTime: BigInt;

  @Field((type) => String)
  isUnrestricted: Boolean;

  @Field((type) => String)
  isTicketLimit: Boolean;

  @Field((type) => String)
  isPromoClosed: Boolean;

  @Field((type) => String)
  ticketsClaimed: BigInt;

  @Field((type) => String)
  ticketsRedeemed: BigInt;
}
