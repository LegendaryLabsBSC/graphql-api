import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class LegendMatching {
  @Field((type) => String)
  matchingId: bigint;

  @Field((type) => String)
  createdAt: bigint;

  @Field()
  nftContract: string;

  @Field()
  surrogate: string;

  @Field((type) => String)
  surrogateLegend: bigint;

  @Field()
  blender: string;

  @Field((type) => String)
  blenderLegend: bigint;

  @Field((type) => String)
  childId: bigint;

  @Field((type) => String)
  price: bigint;

  @Field((type) => String, { nullable: true })
  status: string;
}
