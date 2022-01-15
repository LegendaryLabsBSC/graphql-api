import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class PromoCounts {
  @Field()
  totalPromos: string;

  @Field()
  promosClosed: string;
}
