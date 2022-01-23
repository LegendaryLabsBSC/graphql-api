import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class MatchingCounts {
  @Field((type) => Int)
  matchingIds: number;

  @Field((type) => Int)
  matchingsClosed: number;

  @Field((type) => Int)
  matchingsCancelled: number;
}
