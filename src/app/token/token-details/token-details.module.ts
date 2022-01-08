import { Module } from '@nestjs/common';
import { TokenDetailsService } from './token-details.service';
import { TokenDetailsResolver } from './token-details.resolver';

@Module({
  providers: [TokenDetailsService, TokenDetailsResolver],
})
export class TokenDetailsModule {}
