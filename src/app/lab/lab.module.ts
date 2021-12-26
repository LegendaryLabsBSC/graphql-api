import { Module } from '@nestjs/common';
import { LabService } from './lab.service';
import { LabResolver } from './lab.resolver';
import { ChildContractsModule } from './child-contracts/child-contracts.module';
import { PromoEventModule } from './promo-event/promo-event.module';
import { PromoCountsModule } from './promo-counts/promo-counts.module';
import { LabRulesModule } from './lab-rules/lab-rules.module';
import { RedeemablePromoTicketsModule } from './redeemable-promo-tickets/redeemable-promo-tickets.module';
import { AllPromoEventsModule } from './all-promo-events/all-promo-events.module';

@Module({
  providers: [LabService, LabResolver],
  imports: [ChildContractsModule, PromoEventModule, PromoCountsModule, LabRulesModule, RedeemablePromoTicketsModule, AllPromoEventsModule]
})
export class LabModule {}
