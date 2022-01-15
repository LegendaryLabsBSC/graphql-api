import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class MatchingCounts {
  @Field()
  matchingIds: string;

  @Field()
  matchingsClosed: string;

  @Field()
  matchingsCancelled: string;
}
