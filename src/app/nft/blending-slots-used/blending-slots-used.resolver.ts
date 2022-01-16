import { Resolver, Query, Args } from '@nestjs/graphql';
import { BlendingSlotsUsedService } from './blending-slots-used.service';
import { BlendingSlotsUsed } from './blending-slots-used.model';

@Resolver()
export class BlendingSlotsUsedResolver {
  constructor(
    private readonly blendingSlotsUsedService: BlendingSlotsUsedService,
  ) {}

  @Query((returns) => BlendingSlotsUsed)
  async blendingSlotsUsed(@Args('id') id: string) {
    return await this.blendingSlotsUsedService.fetchBlendingSlotsUsed(id);
  }
}
