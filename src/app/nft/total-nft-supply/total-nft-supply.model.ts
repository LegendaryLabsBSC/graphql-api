import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class TotalNFTSupply {
  @Field((type) => Int)
  total: number;
}
