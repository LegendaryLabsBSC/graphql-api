import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  ChildContracts,
  ChildContractsDocument,
} from './child-contracts.schema';
import { ContractLab as lab } from 'src/contract-lab/contract-lab.service';

@Injectable()
export class ChildContractsService {
  constructor(
    @InjectModel(ChildContracts.name)
    private childContractsModel: Model<ChildContractsDocument>,
  ) {}

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
