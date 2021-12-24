import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { LegendnftModule } from './legendnft/legendnft.module';
import {
  EthersModule,
  InjectEthersProvider,
  StaticJsonRpcProvider,
  BNB_TESTNET_NETWORK,
} from 'nestjs-ethers';

@Module({
  imports: [
    LegendnftModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    MongooseModule.forRoot('mongodb://localhost/graphql-api-test1'),
    EthersModule.forRoot({
      network: BNB_TESTNET_NETWORK,
      custom: 'https://data-seed-prebsc-2-s2.binance.org:8545/',
      useDefaultProvider: false,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
