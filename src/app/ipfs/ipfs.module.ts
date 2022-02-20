import { Module } from '@nestjs/common';
import { IPFSService } from './ipfs.service';
import { IPFSResolver } from './ipfs.resolver';
import { PinataModule } from './pinata/pinata.module';
@Module({
  providers: [IPFSService, IPFSResolver],
  imports: [PinataModule],
})
export class IPFSModule {}
