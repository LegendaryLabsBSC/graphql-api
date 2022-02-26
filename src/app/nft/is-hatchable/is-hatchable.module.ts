import { Module } from '@nestjs/common';
import { IsHatchableService } from './is-hatchable.service';
import { IsHatchableResolver } from './is-hatchable.resolver';

@Module({
  providers: [IsHatchableService, IsHatchableResolver],
  exports: [IsHatchableService],
})
export class IsHatchableModule {}
