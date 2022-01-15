import { ObjectType, Int, Field } from '@nestjs/graphql';

@ObjectType()
export class PromoCounts {
  @Field((type) => Int)
  totalPromos: number;

  @Field((type) => Int)
  promosClosed: number;
}
