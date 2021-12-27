import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LegendNFTService } from './legendnft.service';
import { LegendNFTResolver } from './legendnft.resolver';
import { LegendNFT, LegendNFTSchema } from './legendnft.schema';

// import { ContractLabService } from 'src/contract-lab/contract-lab.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: LegendNFT.name, schema: LegendNFTSchema },
    ]),
  ],
  providers: [LegendNFTService, LegendNFTResolver
    // , ContractLabService
  ],
})
export class LegendnftModule {}
