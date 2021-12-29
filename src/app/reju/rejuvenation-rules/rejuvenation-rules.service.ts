import { Injectable } from '@nestjs/common';
import { RejuvenationRules } from './rejuvenation-rules.model';
import { contractLab as lab } from 'src/contract-lab/contract-lab.service';

@Injectable()
export class RejuvenationRulesService {
  parseData(data: RejuvenationRules): RejuvenationRules {
    const rejuvenationRules: any = {};

    rejuvenationRules['minimumSecure'] = data[0].toString();
    rejuvenationRules['maxMultiplier'] = data[1].toString();
    rejuvenationRules['reJuPerBlock'] = data[2].toString();
    rejuvenationRules['reJuNeededPerSlot'] = data[3].toString();

    return rejuvenationRules;
  }

  async fetchRejuvenationRules(): Promise<RejuvenationRules> {
    const rulesData: RejuvenationRules =
      await lab.reju.fetchRejuvenationRules();
    const rejuvenationRules: RejuvenationRules = this.parseData(rulesData);

    return rejuvenationRules;
  }
}
