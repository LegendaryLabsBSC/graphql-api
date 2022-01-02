import { Injectable } from '@nestjs/common';
import { LegendListing } from './legend-listing.model';
import { contractLab as lab } from 'src/contract-lab/contract-lab.service';

@Injectable()
export class LegendListingService {
  parseData(data: LegendListing): LegendListing {
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

  async fetchLegendListing(id: string): Promise<LegendListing> {
    let legendListing: LegendListing;

    legendListing = await lab.marketplace.fetchLegendListing(id);
    legendListing = this.parseData(legendListing);

    // let maxTickets: bigint;

    // try {
    //   maxTickets = (await lab.admin.fetchMaxTicketsDispensable(id)).toString();
    // } catch (e) {
    //   if (e.reason === 'Promo Event Does Not Have A Max Ticket Limit') {
    //     maxTickets = null;
    //   } else {
    //     throw new Error('Unknown API Error Occurred');
    //   }
    // } finally {
    //   legendListing['maxTicketsDispensable'] = maxTickets;
    // }

    // legendListing['promoLegendsIncubated'] = await lab.admin.isPromoIncubated(id);

    return legendListing;
  }
}
