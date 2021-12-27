import { Module } from '@nestjs/common';
import { NftService } from './nft.service';
import { NftResolver } from './nft.resolver';
import { BlendingRulesModule } from './blending-rules/blending-rules.module';


@Module({
  providers: [NftService, NftResolver],
  imports: [BlendingRulesModule]
})
export class NftModule { }
