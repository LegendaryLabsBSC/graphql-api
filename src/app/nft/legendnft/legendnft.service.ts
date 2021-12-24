import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { LegendNFT, LegendNFTDocument } from './legendnft.schema';
import { ContractLab as lab } from 'src/contract-lab/contract-lab.service';

//todo: reduce
interface LegendMetadata {
  id: string;
  season: string;
  prefix: string;
  postfix: string;
  parents: string[];
  birthday: string;
  blendingInstancesUsed: string;
  totalOffspring: string;
  legendCreator: string;
  isLegendary: boolean;
  isHatched: boolean;
  isDestroyed: boolean;
}

// export type TokenData = {
//   image: string;
//   metadata: any;
// };

@Injectable()
export class LegendNFTService {
  constructor(
    @InjectModel(LegendNFT.name)
    private legendnftModel: Model<LegendNFTDocument>, // @InjectEthersProvider() // private readonly provider: StaticJsonRpcProvider, // @InjectContractProvider() // private readonly ethersContract: EthersContract,
  ) {}

  parseMetadata(data: LegendMetadata): LegendNFT {
    let metadata: any = {};

    const keys = Object.keys(data).slice(12, 24);
    keys.splice(4, 1, 'parent1', 'parent2');

    const values = `${data}`.split(',', 13);

    keys.forEach((value: any, index) => {
      metadata[value] = values[index];
    });

    return metadata;
  }

  async fetchLegendData(id: string): Promise<LegendNFT> {
    // const image: string = await lab.nft
    // .fetchLegendURI(id)
    // .then((res: string) => res.split(',', 3)[1]);
    const legendMetadata: LegendMetadata = await lab.nft.fetchLegendMetadata(
      id,
    );

    const metadata: LegendNFT = this.parseMetadata(legendMetadata);

    return metadata;
    // return { image, metadata };
  }

  // async fetchAllLegends(): Promise<LegendNFT[]> {
  //   const allTokens: LegendNFT[] = [];

  //   await lab.nft.read.totalSupply().then((total: number) => {
  //     for (let i = 1; i <= total; i++) {
  //       this.findLegend(`${i}`).then((data: LegendNFT) => {
  //         return data;
  //         // const filteredToken = this.filterData(data);
  //         // filteredToken != null && allTokens.push(filteredToken);
  //   //     });
  //   //   }
  //   });

  //   // return lab.admin.legendsMarketplace();

  //   // return 'good';
  //   // return contract.legendsNFT();
  // }

  // filterData(data: LegendNFT): LegendNFT {
  //   console.log(data);
  //   if (data.isDestroyed === true) return null;
  //   console.log(data);
  //   return data;
  // }

  // async findLegend(id: String): Promise<LegendNFT> {
  //   const image: string = await lab.nft
  //     .fetchLegendURI(id)
  //     .then((res: string) => res.split(',', 3)[1]);
  //   const legendMetadata = await lab.nft.fetchLegendMetadata(id);

  //   //   // const metadata = parseMetadata(legendMetadata);
  //   //   //
  //   return legendMetadata;
  //   //   // }
  // }

  async findAllLegends(id: string): Promise<LegendNFT> {
    // const allTokens: LegendNFT[] = [];

    // const ff = lab.nft.totalSupply().then((total: number) => {
    //   for (let i = 1; i <= total; i++) {
    //     this.fetchLegendData(`${i}`).then((data: LegendNFT) => {
    //       //       // const filteredToken = this.filterData(data);
    //       //       // filteredToken != null && allTokens.push(filteredToken);
    //       // console.log(data, 'good');
    //       allTokens.push(data);
    //     });
    //   }
    //   console.log(allTokens,'ll');
    // });

    // return await ff;

    // return allTokens;

    const legendMetadata: LegendMetadata = await lab.nft.fetchLegendMetadata(
      id,
    );

    const metadata: LegendNFT = this.parseMetadata(legendMetadata);

    console.log(metadata);

    return metadata;

    // return this.legendnftModel.find().exec();
  }

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
//
