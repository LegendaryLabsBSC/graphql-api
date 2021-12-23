import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LegendNFTService } from './legendnft.service';
import { LegendNFTResolver } from './legendnft.resolver';
import { LegendNFT, LegendNFTSchema } from './legendnft.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: LegendNFT.name, schema: LegendNFTSchema },
    ]),
  ],
  providers: [LegendNFTService, LegendNFTResolver],
})
export class LegendnftModule {}
