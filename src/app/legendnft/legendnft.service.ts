import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  LegendNFT,
  LegendNFTDocument,
  LegendNFTSchema,
} from './legendnft.schema';
import { ContractLab as lab } from 'src/contract-lab/contract-lab';

// class interface Window {
//   ethereum?: any;
// }
@Injectable()
export class LegendNFTService {
  constructor(
    @InjectModel(LegendNFT.name)
    private legendnftModel: Model<LegendNFTDocument>,
  ) {}


  async findLegend(id: String): Promise<LegendNFT> {
    const image: string = await lab.nft.read
      .fetchLegendURI(id)
      .then((res: string) => res.split(',', 3)[1]);
    const legendMetadata: LegendNFT = await lab.nft.read.fetchLegendMetadata(
      id,
    );

    // const metadata = parseMetadata(legendMetadata);
    //
    return legendMetadata;
    // }
  }

  // async filterData(data: LegendNFT): Promise<LegendNFT> {
  //   if (data.metadata.isDestroyed === true) return null;
  //   return data;
  // }

  // async findAllLegends(): Promise<LegendNFT[]> {
  //   const allTokens: LegendNFT[] = [];

  //   await lab.nft.read.totalSupply().then((total: number) => {
  //     for (let i = 1; i <= total; i++) {
  //       // this.findLegend(`${i}`).then((data: LegendNFT) => {
  //       //   return data;
  //       //   // const filteredToken = this.filterData(data);
  //       //   // filteredToken != null && allTokens.push(filteredToken);
  //       // });
  //     }
  //   });

  // return allTokens;

  // return this.legendnftModel.find().exec();
  // }

  async foo(): Promise<String> {
    const e = 7;
    const g = 8;
    const t = e + g;
    return `${t}`;
  }

  // async fetchAllTokens(): Promise<LegendNFT[]> {
  //   return this.legendnftModel.find().exec();
  // }
}
