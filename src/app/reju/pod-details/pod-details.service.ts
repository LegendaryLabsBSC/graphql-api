import { Injectable } from '@nestjs/common';
import { PodDetails } from './pod-details.model';
import { contractLab as lab } from 'src/contract-lab/contract-lab.service';

@Injectable()
export class PodDetailsService {
  parseData(data: PodDetails): PodDetails {
    const podDetails: any = {};

    const keys = Object.keys(data).slice(8);
    const values = `${data}`.split(',');

    console.log(keys);
    console.log(values);

    keys.forEach((key: string, index) => {
      podDetails[key] = values[index];
    });

    return podDetails;
  }

  async fetchPodDetails(id: string): Promise<PodDetails> {
    //todo: work on how error should return
    let podDetails: PodDetails;

    podDetails = await lab.reju.fetchPodDetails(id);
    podDetails = this.parseData(podDetails);

    return podDetails;
  }
}
