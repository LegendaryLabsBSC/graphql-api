import { Injectable } from '@nestjs/common';
import { IsHatchable } from './is-hatchable.model';
import { contractLab as lab } from 'src/contract-lab/contract-lab.service';

@Injectable()
export class IsHatchableService {
  async fetchIsHatchable(id: string): Promise<IsHatchable> {
    let hatchable: boolean;
    let unableReason: string;

    if ((await lab.admin.isHatched(id)) === true) {
      hatchable = false;
      unableReason = 'Legend NFT Already Hatched';
    } else {
      hatchable = await lab.nft.isHatchable(id);
    }

    const isHatchable: IsHatchable = {
      hatchable: hatchable,
      unableReason: unableReason,
    };

    return isHatchable;
  }
}
