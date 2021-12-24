import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class ChildContracts {
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
