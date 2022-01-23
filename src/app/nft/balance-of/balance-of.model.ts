import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class NFTBalanceOf {
  @Field((type) => Int)
  balance: number;
}
