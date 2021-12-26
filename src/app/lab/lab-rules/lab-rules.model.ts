import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class BlendingRules {
  @Field((type) => String)
  kinBlendingLevel: number;

  @Field((type) => String)
  blendingLimit: bigint;

  @Field((type) => String)
  baseBlendingCost: bigint;

  @Field((type) => String)
  incubationPeriod: bigint;
}

@ObjectType()
export class MarketplaceRules {
  @Field((type) => String)
  royaltyFee: bigint;

  @Field((type) => String)
  marketPlaceFee: bigint;

  @Field((type) => String)
  offerDuration: bigint;

  @Field((type) => [String])
  auctionDurations: [bigint];

  @Field((type) => String)
  auctionExtension: bigint;
}

@ObjectType()
export class RejuvenationRules {
  @Field((type) => String)
  minimumSecure: bigint;

  @Field((type) => String)
  maxMultiplier: bigint;

  @Field((type) => String)
  reJuPerBlock: bigint;

  @Field((type) => String)
  reJuNeededPerSlot: bigint;
}

@ObjectType()
export class LabRules {
  @Field()
  blendingRules: BlendingRules;

  @Field()
  marketplaceRules: MarketplaceRules;

  @Field()
  rejuvenationRules: RejuvenationRules;
}
