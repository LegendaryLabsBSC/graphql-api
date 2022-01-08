import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class AuctionDetails {
  @Field((type) => String, { nullable: true })
  duration: bigint;

  @Field((type) => String, { nullable: true })
  startingPrice: bigint;

  @Field((type) => String, { nullable: true })
  highestBid: bigint;

  @Field({ nullable: true })
  highestBidder: string;

  @Field((type) => String, { nullable: true })
  isInstantBuy: boolean;

  @Field({ nullable: true })
  durationInDays: string;

  @Field({ nullable: true })
  instantBuyPrice: string;

  @Field((type) => [String], { nullable: true })
  bidders: [string];

  @Field({ nullable: true })
  isExpired: boolean;
}
