import { ObjectType, Field } from '@nestjs/graphql';

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
