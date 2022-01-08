import { Injectable } from '@nestjs/common';
import { RejuvenationProgress } from './rejuvenation-progress.model';
import { contractLab as lab } from 'src/contract-lab/contract-lab.service';

@Injectable()
export class RejuvenationProgressService {
  async fetchRejuvenationProgress(id: string): Promise<RejuvenationProgress> {
    //todo: work on how error should return

    let rejuvenationProgress: RejuvenationProgress =
      await lab.reju.fetchRejuvenationProgress(id);

    rejuvenationProgress = {
      earnedReJu: rejuvenationProgress[0].toString(),
      maxEarnableReju: rejuvenationProgress[1].toString(),
    };

    return rejuvenationProgress;
  }
}
