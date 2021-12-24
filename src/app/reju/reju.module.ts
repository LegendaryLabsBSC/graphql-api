import { Module } from '@nestjs/common';
import { RejuService } from './reju.service';
import { RejuResolver } from './reju.resolver';

@Module({
  providers: [RejuService, RejuResolver]
})
export class RejuModule {}
