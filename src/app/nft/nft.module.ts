import { Module } from '@nestjs/common';
import { NFTService } from './nft.service';
import { NFTResolver } from './nft.resolver';
import { BlendingRulesModule } from './blending-rules/blending-rules.module';
import { LegendMetadataModule } from './legend-metadata/legend-metadata.module';
import { LegendURIModule } from './legend-uri/legend-uri.module';
import { LegendNFTModule } from './legend-nft/legend-nft.module';
import { IncubationViewsModule } from './incubation-views/incubation-views.module';
import { IsHatchableModule } from './is-hatchable/is-hatchable.module';
import { IsBlendableModule } from './is-blendable/is-blendable.module';
import { IsListableModule } from './is-listable/is-listable.module';
import { BlendingSlotsUsedModule } from './blending-slots-used/blending-slots-used.module';
import { BlendingCostModule } from './blending-cost/blending-cost.module';
import { TotalNFTSupplyModule } from './total-nft-supply/total-nft-supply.module';
import { OwnerOfLegendModule } from './owner-of-legend/owner-of-legend.module';
import { LegendOffspringModule } from './legend-offspring/legend-offspring.module';
import { BalanceOfModule } from './balance-of/balance-of.module';
@Module({
  providers: [NFTService, NFTResolver],
  imports: [
    BlendingRulesModule,
    LegendMetadataModule,
    LegendURIModule,
    LegendNFTModule,
    IncubationViewsModule,
    IsHatchableModule,
    IsBlendableModule,
    IsListableModule,
    BlendingSlotsUsedModule,
    BlendingCostModule,
    TotalNFTSupplyModule,
    OwnerOfLegendModule,
    LegendOffspringModule,
    BalanceOfModule,
  ],
})
export class NFTModule {}
