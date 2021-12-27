import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class PromoCounts {
  @Field((type) => String)
  totalPromos: bigint;

  @Field((type) => String)
  promosClosed: bigint;
}
