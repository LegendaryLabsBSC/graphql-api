import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class LegendMetadata {
  @Field((type) => Int)
  id: number;

  @Field()
  season: string;

  @Field()
  prefix: string;

  @Field()
  postfix: string;

  @Field((type) => Int)
  parent1: number;

  @Field((type) => Int)
  parent2: number;

  @Field((type) => String)
  birthday: bigint;

  @Field((type) => Int)
  blendingInstancesUsed: number;

  @Field((type) => Int)
  totalOffspring: number;

  @Field()
  legendCreator: string;

  @Field()
  isLegendary: boolean;

  @Field()
  isHatched: boolean;

  @Field()
  isDestroyed: boolean;
}
