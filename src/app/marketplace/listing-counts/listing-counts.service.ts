import { Injectable } from '@nestjs/common';
import { ListingCounts } from './listing-counts.model';
import { contractLab as lab } from 'src/contract-lab/contract-lab.service';

@Injectable()
export class ListingCountsService {
  async fetchListingCounts(): Promise<ListingCounts> {
    const countsData: bigint[] = await lab.marketplace.fetchListingCounts();

    const listingCounts: ListingCounts = {
      listingIds: Number(countsData[0]),
      listingsClosed: Number(countsData[1]),
      listingsCancelled: Number(countsData[2]),
    };

    return listingCounts;
  }
}
