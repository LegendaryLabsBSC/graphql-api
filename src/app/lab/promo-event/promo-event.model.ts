import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class PromoEvent {
  @Field()
  promoName: string;

  @Field((type) => String)
  promoId: bigint;

  @Field((type) => String)
  startTime: bigint;

  @Field((type) => String)
  expireTime: bigint;

  @Field((type) => String)
  isUnrestricted: boolean;

  @Field((type) => String)
  isTicketLimit: boolean;

  @Field((type) => String)
  isPromoClosed: boolean;

  @Field((type) => String)
  ticketsClaimed: bigint;

  @Field((type) => String)
  ticketsRedeemed: bigint;
}
