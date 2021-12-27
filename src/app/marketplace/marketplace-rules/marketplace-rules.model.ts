import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class MarketplaceRules {
  @Field((type) => String)
  royaltyFee: bigint;

  @Field((type) => String)
  marketPlaceFee: bigint;

  @Field((type) => String)
  offerDuration: bigint;

  @Field((type) => String)
  auctionExtension: bigint;

  @Field((type) => [String])
  auctionDurations: [bigint];
}

