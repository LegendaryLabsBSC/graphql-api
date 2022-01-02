import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class LegendListing {
  @Field((type) => String)
  listingId: bigint;

  @Field((type) => String)
  createdAt: bigint;

  @Field()
  nftContract: string;

  @Field((type) => String)
  legendId: bigint;

  @Field()
  seller: string;

  @Field()
  buyer: string;

  @Field((type) => String)
  price: bigint;

  @Field((type) => String)
  isAuction: boolean;

  @Field((type) => String)
  isOffer: boolean;

  @Field((type) => String, { nullable: true })
  status: number;
}
