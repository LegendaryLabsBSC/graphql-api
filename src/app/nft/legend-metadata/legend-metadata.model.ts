import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class LegendMetadata {
  @Field((type) => String)
  id: bigint;

  @Field()
  season: string;

  @Field()
  prefix: string;

  @Field()
  postfix: string;

  // @Field((type) => [String])
  // parents: [bigint];


  @Field((type) => String)
  parent1: bigint;

  @Field((type) => String)
  parent2: bigint;

  @Field((type) => String)
  birthday: bigint;

  @Field((type) => String)
  blendingInstancesUsed: bigint;

  @Field((type) => String)
  totalOffspring: bigint;

  @Field()
  legendCreator: string;

  @Field((type) => String)
  isLegendary: boolean;

  @Field((type) => String)
  isHatched: boolean;

  @Field((type) => String)
  isDestroyed: boolean;
}

