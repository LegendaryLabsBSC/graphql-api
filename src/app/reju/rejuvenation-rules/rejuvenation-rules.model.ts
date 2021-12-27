import { ObjectType, Field } from '@nestjs/graphql';


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
