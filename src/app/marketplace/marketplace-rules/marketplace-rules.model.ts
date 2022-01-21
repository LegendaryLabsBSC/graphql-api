import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class MarketplaceRules {
  @Field()
  royaltyFee: string;

  @Field()
  marketPlaceFee: string;

  @Field((type) => String)
  offerDuration: bigint;

  @Field((type) => String)
  auctionExtension: bigint;

  @Field((type) => [String])
  auctionDurations: [bigint];
}
