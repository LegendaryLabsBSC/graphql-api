import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class ChildContracts {
  @Field()
  legendsNFT: string;

  @Field()
  legendToken: string;

  @Field()
  legendRejuvenation: string;

  @Field()
  legendsMarketplace: string;

  @Field()
  legendsMatchingBoard: string;
}
