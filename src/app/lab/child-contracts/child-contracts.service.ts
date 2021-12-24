import { Injectable } from '@nestjs/common';
import { ChildContracts } from './child-contracts.model';
import { contractLab as lab } from 'src/contract-lab/contract-lab.service';

@Injectable()
export class ChildContractsService {

  async fetchChildContracts(): Promise<ChildContracts> {
    const contracts: ChildContracts = {
      legendsNFT: await lab.admin.legendsNFT(),
      legendToken: await lab.admin.legendToken(),
      legendRejuvenation: await lab.admin.legendRejuvenation(),
      legendsMarketplace: await lab.admin.legendsMarketplace(),
      legendsMatchingBoard: await lab.admin.legendsMatchingBoard(),
    };

    return contracts;
  }
}
