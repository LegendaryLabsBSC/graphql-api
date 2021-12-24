import { ObjectType, Field, InputType, ID } from '@nestjs/graphql';

@ObjectType('PromoEventType')
@InputType('PromoEventTypeInput')
export class PromoEventType {
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
