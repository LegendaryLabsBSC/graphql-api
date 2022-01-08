import { ObjectType, Field } from '@nestjs/graphql';
import { AuctionDetails } from '../auction-details/auction-details.model';
import { OfferDetails } from '../offer-details/offer-details.model';

@ObjectType()
export class LegendListing {
  @Field((type) => String)
  listingId: bigint;

  @Field((type) => String)
  createdAt: bigint;

  @Field()
  nftContract: string;

  @Field((type) => String)
  legendId: bigint;

  @Field()
  seller: string;

  @Field()
  buyer: string;

  @Field((type) => String)
  price: bigint;

  @Field((type) => String)
  isAuction: boolean;

  @Field((type) => String)
  isOffer: boolean;

  @Field((type) => String, { nullable: true })
  status: string;

  @Field()
  auctionDetails: AuctionDetails;

  @Field()
  offerDetails: OfferDetails;
}
