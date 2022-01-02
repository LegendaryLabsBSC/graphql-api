import { Module } from '@nestjs/common';
import { PodDetailsService } from './pod-details..service';
import { PodDetailsResolver } from './pod-details..resolver';

@Module({
  providers: [PodDetailsService, PodDetailsResolver],
})
export class PodDetailsModule {}
