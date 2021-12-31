import { Injectable } from '@nestjs/common';
import { IsHatchable } from './is-hatchable.model';
import { contractLab as lab } from 'src/contract-lab/contract-lab.service';

@Injectable()
export class IsHatchableService {
  async fetchIsHatchable(id: string): Promise<IsHatchable> {
    const isHatchable: any = {};

    if ((await lab.admin.isHatched(id)) === true) {
      isHatchable['isHatchable'] = false;
      isHatchable['unableReason'] = 'Legend NFT Already Hatched';
    } else {
      isHatchable['isHatchable'] = await lab.nft.isHatchable(id);
    }

    return isHatchable;

    //todo: fix optimizer error messeages ; redeploy contracts ; catch errors and parse them accordingly
  }
}
