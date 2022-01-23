import { Module } from '@nestjs/common';
import { BalanceOfService } from './balance-of.service';
import { BalanceOfResolver } from './balance-of.resolver';

@Module({
  providers: [BalanceOfService, BalanceOfResolver],
})
export class BalanceOfModule {}
