import { Module } from '@nestjs/common';
import { TokenService } from './token.service';
import { TokenResolver } from './token.resolver';
import { BalanceOfModule } from './balance-of/balance-of.module';
import { TokenDetailsModule } from './token-details/token-details.module';

@Module({
  providers: [TokenService, TokenResolver],
  imports: [BalanceOfModule, TokenDetailsModule],
})
export class TokenModule {}
