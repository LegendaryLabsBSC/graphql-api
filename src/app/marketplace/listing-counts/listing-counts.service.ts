import { Injectable } from '@nestjs/common';
import { ListingCounts } from './listing-counts.model';
import { contractLab as lab } from 'src/contract-lab/contract-lab.service';

@Injectable()
export class ListingCountsService {
  async fetchListingCounts(): Promise<ListingCounts> {
    const countsData: bigint[] = await lab.marketplace.fetchListingCounts();

    const listingCounts: ListingCounts = {
      listingIds: countsData[0].toString(),
      listingsClosed: countsData[1].toString(),
      listingsCancelled: countsData[2].toString(),
    };

    return listingCounts;
  }
}
