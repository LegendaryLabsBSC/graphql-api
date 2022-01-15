import { Module } from '@nestjs/common';
import { TokensPendingService } from './tokens-pending.service';
import { TokensPendingResolver } from './tokens-pending.resolver';

@Module({
  providers: [
    TokensPendingService,
    TokensPendingResolver,
  ],
})
export class TokensPendingModule {}
