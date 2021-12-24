import { ObjectType, Field, InputType, ID } from '@nestjs/graphql';

@ObjectType('ChildContractsType')
@InputType('ChildContractsTypeInput')
export class ChildContractsType {
  @Field()
  legendsNFT: String;

  @Field()
  legendToken: String;

  @Field()
  legendRejuvenation: String;

  @Field()
  legendsMarketplace: String;

  @Field()
  legendsMatchingBoard: String;
}
