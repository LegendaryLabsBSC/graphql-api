import { Module } from '@nestjs/common';
import { TotalNFTSupplyService } from './total-nft-supply.service';
import { TotalNFTSupplyResolver } from './total-nft-supply.resolver';

@Module({
  providers: [TotalNFTSupplyService, TotalNFTSupplyResolver],
})
export class TotalNFTSupplyModule {}
