import { Module } from '@nestjs/common';
import { IsListableService } from './is-listable.service';
import { IsListableResolver } from './is-listable-resolver';

@Module({
  providers: [IsListableService, IsListableResolver],
})
export class IsListableModule {}
