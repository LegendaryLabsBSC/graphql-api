import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class LegendOffspring {
  @Field((type) => [String])
  offspring: [bigint];
}
