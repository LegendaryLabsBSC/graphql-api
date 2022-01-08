import { Resolver, Query, Args } from '@nestjs/graphql';
import { RejuvenationProgressService } from './rejuvenation-progress.service';
import { RejuvenationProgress } from './rejuvenation-progress.model';

@Resolver()
export class RejuvenationProgressResolver {
  constructor(private readonly rejuvenationProgressService: RejuvenationProgressService) {}

  @Query((returns) => RejuvenationProgress)
  async rejuvenationProgress(@Args('id') id: string) {
    return await this.rejuvenationProgressService.fetchRejuvenationProgress(id);
  }
}
