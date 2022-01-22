import { Injectable } from '@nestjs/common';
import { LegendListing } from './legend-listing.model';
import { contractLab as lab } from 'src/contract-lab/contract-lab.service';
import { AuctionDetailsService } from '../auction-details/auction-details.service';
import { OfferDetailsService } from '../offer-details/offer-details.service';

@Injectable()
export class LegendListingService {
  constructor(
    private readonly auctionDetailsService: AuctionDetailsService,
    private readonly offerDetailsService: OfferDetailsService,
  ) {}

  parseData(data: any): LegendListing {
    const parseStatus = (status: number): string => {
      const listingService: any = {
        0: null,
        1: 'Open',
        2: 'Closed',
        3: 'Cancelled',
      };

      return listingService[status];
    };

    const legendListing: any = {};

    legendListing['listingId'] = Number(data.listingId);
    legendListing['createdAt'] = data.createdAt.toString();
    legendListing['nftContract'] = data.nftContract;
    legendListing['legendId'] = Number(data.legendId);
    legendListing['seller'] = data.seller;
    legendListing['buyer'] = data.buyer;
    legendListing['price'] = data.price.toString();
    legendListing['isAuction'] = data.isAuction;
    legendListing['isOffer'] = data.isOffer;
    legendListing['status'] = parseStatus(data.status);

    // legendListing['lengthInDays'] = //todo: calendar date creation-time
    //   (parseInt(legendListing.expireTime) - parseInt(legendListing.startTime)) /
    //   86400; // One day in seconds

    return legendListing;
  }

  async fetchLegendListing(id: string): Promise<LegendListing> {
    let legendListing: LegendListing;

    legendListing = await lab.marketplace.fetchLegendListing(id);
    legendListing = this.parseData(legendListing);

    legendListing['auctionDetails'] =
      await this.auctionDetailsService.fetchAuctionDetails(id);

    legendListing['offerDetails'] =
      await this.offerDetailsService.fetchOfferDetails(id);

    return legendListing;
  }

  async fetchAllLegendListings(
    filter: string,
    status: string,
  ): Promise<LegendListing[]> {
    const filterData = (filter: string, data: LegendListing): boolean => {
      switch (filter) {
        case 'all':
          return true;
        case 'sale':
          if (
            data.isAuction.toString() === 'false' &&
            data.isOffer.toString() === 'false'
          )
            return true;
          break;
        case 'auction':
          if (data.isAuction.toString() === 'true') return true;
          break;
        case 'offer':
          if (data.isOffer.toString() === 'true') return true;
          break;
        default:
          return false;
      }
    };

    let allListings: LegendListing[] = [];

    // const countsData: PromoCounts = await lab.admin.fetchPromoCounts(); // todo
    const countsData = await lab.marketplace.fetchListingCounts();

    for (let i = 1; i <= countsData[0]; i++) {
      const listingIndex: string = i.toString();

      const legendListing: LegendListing = await this.fetchLegendListing(
        listingIndex,
      );

      if (filterData(filter, legendListing) === true)
        allListings.push(legendListing);
    }

    if (status !== undefined) {
      allListings = allListings.filter((listing) => {
        switch (status) {
          case 'all':
            return true;
          case 'open':
            if (listing.status === 'Open') return true;
            break;
          case 'closed':
            if (listing.status === 'Closed') return true;
            break;
          case 'cancelled':
            if (listing.status === 'Cancelled') return true;
            break;
          default:
            return false;
        }
      });
    }

    return allListings;
  }
}
