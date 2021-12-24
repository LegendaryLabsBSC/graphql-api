import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ChildContractsService } from './child-contracts.service';
import { ChildContractsResolver } from './child-contracts.resolver';
import { ChildContracts, ChildContractsSchema } from './child-contracts.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ChildContracts.name, schema: ChildContractsSchema },
    ]),
  ],
  providers: [ChildContractsService, ChildContractsResolver],
})
export class ChildContractsModule {}
