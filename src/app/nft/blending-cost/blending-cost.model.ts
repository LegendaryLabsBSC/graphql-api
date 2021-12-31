import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class BlendingCost {
  @Field((type) => String)
  cost: number;

  @Field({ nullable: true })
  ezCost?: string;
}
