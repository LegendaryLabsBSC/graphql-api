import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class TokenDetails {
  @Field()
  name: string;

  @Field()
  symbol: string;

  @Field((type) => String)
  totalSupply: bigint;
}
