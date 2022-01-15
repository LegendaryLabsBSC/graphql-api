import { Injectable } from '@nestjs/common';
import { LegendMatching } from './legend-matching.model';
import { contractLab as lab } from 'src/contract-lab/contract-lab.service';

@Injectable()
export class LegendMatchingService {
  parseData(data: LegendMatching): LegendMatching {
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

    const keys = Object.keys(data).slice(10);
    const values = `${data}`.split(',');

    keys.forEach((key: string, index) => {
      legendListing[key] = values[index];
    });

    legendListing.status = parseStatus(legendListing.status);

    // legendListing['lengthInDays'] =
    //   (parseInt(legendListing.expireTime) - parseInt(legendListing.startTime)) /
    //   86400; // One day in seconds

    return legendListing;
  }

  async fetchLegendMatching(id: string): Promise<LegendMatching> {
    let legendMatching: LegendMatching;

    legendMatching = await lab.matching.fetchLegendMatching(id);
    legendMatching = this.parseData(legendMatching);

    return legendMatching;
  }

  // async fetchAllLegendMatchings(
  //   filter: string,
  //   status: string,
  // ): Promise<LegendMatching[]> {
  //   const filterData = (filter: string, data: LegendMatching): boolean => {
  //     switch (filter) {
  //       case 'all':
  //         return true;
  //       case 'sale':
  //         if (
  //           data.isAuction.toString() === 'false' &&
  //           data.isOffer.toString() === 'false'
  //         )
  //           return true;
  //         break;
  //       case 'auction':
  //         if (data.isAuction.toString() === 'true') return true;
  //         break;
  //       case 'offer':
  //         if (data.isOffer.toString() === 'true') return true;
  //         break;
  //       default:
  //         return false;
  //     }
  //   };

  //   let allListings: LegendMatching[] = [];

  //   // const countsData: PromoCounts = await lab.admin.fetchPromoCounts(); // todo
  //   const countsData = await lab.marketplace.fetchListingCounts();

  //   for (let i = 1; i <= countsData[0]; i++) {
  //     const listingIndex: string = i.toString();

  //     const legendListing: LegendMatching = await this.fetchLegendMatching(
  //       listingIndex,
  //     );

  //     if (filterData(filter, legendListing) === true)
  //       allListings.push(legendListing);
  //   }

  //   if (status !== undefined) {
  //     allListings = allListings.filter((listing) => {
  //       switch (status) {
  //         case 'all':
  //           return true;
  //         case 'open':
  //           if (listing.status === 'Open') return true;
  //           break;
  //         case 'closed':
  //           if (listing.status === 'Closed') return true;
  //           break;
  //         case 'cancelled':
  //           if (listing.status === 'Cancelled') return true;
  //           break;
  //         default:
  //           return false;
  //       }
  //     });
  //   }

  //   return allListings;
  // }
}
