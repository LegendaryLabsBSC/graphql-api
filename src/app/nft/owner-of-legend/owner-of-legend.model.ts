import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class OwnerOfLegend {
  @Field()
  address: string;
}
