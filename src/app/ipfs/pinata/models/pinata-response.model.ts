import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class PinataResponse {
  @Field()
  IpfsHash: string;

  @Field((type) => Int)
  PinSize: number;

  @Field()
  Timestamp: string;

  @Field({ nullable: true })
  isDuplicate?: boolean;
}
