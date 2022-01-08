import { ObjectType, Field } from '@nestjs/graphql';

//todo: will add more reju progress information here
@ObjectType()
export class BalanceOf {
  @Field((type) => String)
  balance: bigint;
}
