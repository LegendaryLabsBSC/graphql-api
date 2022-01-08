import { Resolver, Query, Args } from '@nestjs/graphql';
import { PodDetailsService } from './pod-details..service';
import { PodDetails } from './pod-details.model';

@Resolver()
export class PodDetailsResolver {
  constructor(private readonly podDetailsService: PodDetailsService) {}

  @Query((returns) => PodDetails)
  async podDetails(@Args('id') id: string) {
    return await this.podDetailsService.fetchPodDetails(id);
  }
}
