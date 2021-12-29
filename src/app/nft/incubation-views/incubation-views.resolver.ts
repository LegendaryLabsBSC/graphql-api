import { Resolver, Query} from '@nestjs/graphql';
import { IncubationViewsService } from './incubation-views.service';
import { IncubationViews } from './incubation-views.model';

@Resolver()
export class IncubationViewsResolver {
  constructor(private readonly incubationViewsService: IncubationViewsService) { }

  @Query((returns) => IncubationViews)
  async incubationViews() {
    return await this.incubationViewsService.fetchIncubationViews()
  }
}
