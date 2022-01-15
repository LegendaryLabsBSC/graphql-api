import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class ListingCounts {
  @Field()
  listingIds: string;

  @Field()
  listingsClosed: string;

  @Field()
  listingsCancelled: string;
}
