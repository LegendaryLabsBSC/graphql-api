import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class ListingCounts {
  @Field((type) => Int)
  listingIds: number;

  @Field((type) => Int)
  listingsClosed: number;

  @Field((type) => Int)
  listingsCancelled: number;
}
