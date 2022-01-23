import { Injectable } from '@nestjs/common';
import { MatchingCounts } from './matching-counts.model';
import { contractLab as lab } from 'src/contract-lab/contract-lab.service';

@Injectable()
export class MatchingCountsService {
  async fetchMatchingCounts(): Promise<MatchingCounts> {
    const countsData: bigint[] = await lab.matching.fetchMatchingCounts();

    const matchingCounts: MatchingCounts = {
      matchingIds: Number(countsData[0]),
      matchingsClosed: Number(countsData[1]),
      matchingsCancelled: Number(countsData[2]),
    };

    return matchingCounts;
  }
}
