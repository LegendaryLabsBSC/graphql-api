import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class PodDetails {
  @Field()
  depositedBy: string;

  @Field((type) => String)
  checkpointBlock: bigint;

  @Field((type) => String)
  blendingInstancesUsed: bigint;

  @Field((type) => String)
  tokenAmountSecured: bigint;

  @Field((type) => String)
  multiplier: boolean;

  @Field((type) => String)
  rolloverReju: boolean;

  @Field((type) => String)
  occupied: boolean;
}
