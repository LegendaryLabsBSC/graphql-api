import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class TokensPending {
  @Field((type) => String)
  amount: bigint;
}
