import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class PromoCounts {
  @Field((type) => String)
  totalPromos: BigInt;

  @Field((type) => String)
  promosClosed: BigInt;
}