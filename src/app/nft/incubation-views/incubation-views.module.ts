import { Module } from '@nestjs/common';
import { IncubationViewsService } from './incubation-views.service';
import { IncubationViewsResolver } from './incubation-views.resolver';

@Module({
  providers: [IncubationViewsService, IncubationViewsResolver]
})
export class IncubationViewsModule { }
