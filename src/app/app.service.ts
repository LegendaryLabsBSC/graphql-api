import { Injectable } from '@nestjs/common';

// @Injectable()
// export class AppService {
//   getHello(): string {
//     return 'Hello World!';
//   }
// }


import { Resolver, Query, Args } from '@nestjs/graphql';
// import { LegendNFTService } from './legendnft.service';
// import { LegendType } from './legendnft.dto';
// import { InjectEthersProvider } from 'nestjs-ethers';

@Resolver()
export class AppService {
  // constructor(private readonly legendnftService: LegendNFTService) {}

  @Query((returns) => String)
  async getHello() {
    return 'Hello World!';
  }
}
