import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class PromoEvent {
  @Field()
  promoName: string;

  @Field((type) => Int)
  promoId: bigint;

  @Field((type) => String)
  startTime: bigint;

  @Field((type) => String)
  expireTime: bigint;

  @Field()
  isUnrestricted: boolean;

  @Field()
  isTicketLimit: boolean;

  @Field()
  isPromoClosed: boolean;

  @Field((type) => Int)
  ticketsClaimed: bigint;

  @Field((type) => Int)
  ticketsRedeemed: bigint;

  @Field((type) => Float)
  lengthInDays: number;

  @Field((type) => Int, { nullable: true })
  maxTicketsDispensable: bigint;

  @Field()
  legendsSkipIncubation: boolean;
}
