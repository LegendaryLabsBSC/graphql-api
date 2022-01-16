import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class BlendingCost {
  @Field((type) => Int)
  cost: number;

  @Field()
  ezCost: string;
}
