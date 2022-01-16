import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class BlendingRules {
  @Field()
  kinBlendingLevel: string;

  @Field((type) => Int)
  blendingLimit: number;

  @Field((type) => Int)
  baseBlendingCost: number;

  @Field((type) => Int)
  incubationPeriod: number;
}
