import { ObjectType, Field } from '@nestjs/graphql';

//todo: will add more reju progress information here
@ObjectType()
export class RejuvenationProgress {
  @Field((type) => String)
  earnedReJu: bigint;

  @Field((type) => String)
  maxEarnableReju: bigint;
}
