import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import {
  EthersModule,
  InjectEthersProvider,
  StaticJsonRpcProvider,
  BNB_TESTNET_NETWORK,
} from 'nestjs-ethers';
import { LabModule } from './lab/lab.module';
import { MatchingModule } from './matching/matching.module';
import { MarketplaceModule } from './marketplace/marketplace.module';
import { RejuModule } from './reju/reju.module';
import { TokenModule } from './token/token.module';
import { NFTModule } from './nft/nft.module';
import { IPFSModule } from './ipfs/ipfs.module';

@Module({
  imports: [
    LabModule,
    NFTModule,
    TokenModule,
    RejuModule,
    MarketplaceModule,
    MatchingModule,
    IPFSModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      playground: true,
      introspection: true,
    }),
    // MongooseModule.forRoot('mongodb://localhost/graphql-api-test1'),
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
