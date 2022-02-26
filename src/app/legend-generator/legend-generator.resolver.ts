import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { PinataResponse } from '../ipfs/pinata/models/pinata-response.model';
import { LegendGeneratorService } from './legend-generator.service';

@Resolver()
export class LegendGeneratorResolver {
  constructor(
    private readonly legendGeneratorService: LegendGeneratorService,
  ) {}

  @Mutation((returns) => PinataResponse)
  async generateHatchedLegend(@Args({ name: 'id' }) id: string) {
    return this.legendGeneratorService.generateHatchedLegend(id);
  }
}
