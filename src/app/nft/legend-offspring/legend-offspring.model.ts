import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class LegendOffspring {
  @Field((type) => [Int])
  offspringIds: number[];
}
