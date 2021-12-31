import { Injectable } from '@nestjs/common';
import { IsListable } from './is-listable.model';
import { contractLab as lab } from 'src/contract-lab/contract-lab.service';

@Injectable()
export class IsListableService {
  async fetchIsListable(id: string, address: string): Promise<IsListable> {
    const isListable: any = {};

    if ((await lab.admin.isHatched(id)) === false) {
      isListable['isListable'] = false;
      isListable['unableReason'] = 'Legend NFT Not Hatched';

      return isListable;
    }
    if ((await lab.nft.ownerOf(id)) === address) {
      isListable['isListable'] = true;
    } else {
      isListable['isListable'] = false;
      isListable['unableReason'] =
        'Unauthorized Caller: Caller is not owner of the Legend NFT.';
    }

    return isListable;
  }
}
