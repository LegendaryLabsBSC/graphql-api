import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class BlendingSlotsUsed {
  @Field((type) => Int)
  blendingSlotsUsed: number;

  @Field((type) => Int)
  maxBlendingSlots: number;

  @Field()
  figure: string;
}
