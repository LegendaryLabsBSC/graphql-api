import { Injectable } from '@nestjs/common';
import { MatchingCounts } from './matching-counts.model';
import { contractLab as lab } from 'src/contract-lab/contract-lab.service';

@Injectable()
export class MatchingCountsService {
  async fetchMatchingCounts(): Promise<MatchingCounts> {
    const countsData: bigint[] = await lab.matching.fetchMatchingCounts();

    const matchingCounts: MatchingCounts = {
      matchingIds: countsData[0].toString(),
      matchingsClosed: countsData[1].toString(),
      matchingsCancelled: countsData[2].toString(),
    };

    return matchingCounts;
  }
}
