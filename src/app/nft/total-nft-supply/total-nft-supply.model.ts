import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class TotalNFTSupply {
  @Field((type) => String)
  total: bigint;
}
