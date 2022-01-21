import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class AuctionDetails {
  @Field({ nullable: true })
  duration: string;

  @Field({ nullable: true })
  startingPrice: string;

  @Field({ nullable: true })
  highestBid: string;

  @Field({ nullable: true })
  highestBidder: string;

  @Field({ nullable: true })
  isInstantBuy: boolean;

  @Field((type) => Int, { nullable: true })
  durationInDays: number;

  @Field({ nullable: true })
  instantBuyPrice: string;

  @Field((type) => [String], { nullable: true })
  bidders: [string];

  @Field({ nullable: true })
  isExpired: boolean;
}
