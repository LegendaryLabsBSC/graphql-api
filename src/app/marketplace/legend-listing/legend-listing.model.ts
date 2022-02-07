import { ObjectType, Field, Int } from '@nestjs/graphql';
import { LegendNFT } from 'src/app/nft/legend-nft/legend-nft.model';
import { AuctionDetails } from '../auction-details/auction-details.model';
import { OfferDetails } from '../offer-details/offer-details.model';

@ObjectType()
export class LegendListing {
  @Field((type) => Int)
  listingId: number;

  @Field((type) => String)
  createdAt: bigint;

  @Field()
  nftContract: string;

  @Field((type) => Int)
  legendId: number;

  @Field()
  legendDetails: LegendNFT

  @Field()
  seller: string;

  @Field()
  buyer: string;

  @Field((type) => String)
  price: bigint;

  @Field()
  isAuction: boolean;

  @Field()
  isOffer: boolean;

  @Field((type) => String, { nullable: true })
  status: string;

  @Field()
  auctionDetails: AuctionDetails;

  @Field()
  offerDetails: OfferDetails;
}
