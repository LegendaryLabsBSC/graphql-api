import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class BalanceOf {
  @Field((type) => String)
  balance: bigint;
}
