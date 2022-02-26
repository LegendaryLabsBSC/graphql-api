import { HttpModule, Module } from '@nestjs/common';
import { PinataService } from './pinata.service';
import { PinataResolver } from './pinata.resolver';
import { ConfigModule } from '@nestjs/config';

@Module({
  providers: [PinataService, PinataResolver],
  imports: [HttpModule, ConfigModule.forRoot()],
  exports: [PinataService],
})
export class PinataModule {}
