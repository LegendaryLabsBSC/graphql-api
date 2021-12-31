import { Module } from '@nestjs/common';
import { LabService } from './lab.service';
import { LabResolver } from './lab.resolver';
import { ChildContractsModule } from './child-contracts/child-contracts.module';
import { PromoEventModule } from './promo-event/promo-event.module';
import { PromoCountsModule } from './promo-counts/promo-counts.module';
import { RedeemablePromoTicketsModule } from './redeemable-promo-tickets/redeemable-promo-tickets.module';
import { AccessControlRolesModule } from './access-control-roles/access-control-roles.module';
import { AccessControlUsersModule } from './access-control-users/access-control-users.module';

@Module({
  providers: [LabService, LabResolver],
  imports: [
    ChildContractsModule,
    PromoEventModule,
    PromoCountsModule,
    RedeemablePromoTicketsModule,
    AccessControlRolesModule,
    AccessControlUsersModule
  ]
})
export class LabModule { }
