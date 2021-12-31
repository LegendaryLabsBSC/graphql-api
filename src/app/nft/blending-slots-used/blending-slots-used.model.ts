import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class BlendingSlotsUsed {
  @Field((type) => String)
  blendingSlotsUsed: bigint;

  @Field((type) => String)
  maxBlendingSlotsUsed: bigint;

  @Field()
  figure: string;
}
