import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { LegendnftModule } from './legendnft/legendnft.module';

@Module({
  imports: [
    LegendnftModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    MongooseModule.forRoot('mongodb://localhost/lab-graph-test1')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
