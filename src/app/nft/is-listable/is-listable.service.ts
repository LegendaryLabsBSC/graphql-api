import { Injectable } from '@nestjs/common';
import { IsListable } from './is-listable.model';
import { contractLab as lab } from 'src/contract-lab/contract-lab.service';

@Injectable()
export class IsListableService {
  async fetchIsListable(id: string, address: string): Promise<IsListable> {
    if ((await lab.admin.isHatched(id)) === false) {
      const isListable: IsListable = {
        listable: false,
        unableReason: 'Legend NFT Not Hatched',
      };

      return isListable;
    }

    let listable: boolean;
    let unableReason: string;

    if ((await lab.nft.ownerOf(id)) === address) {
      listable = true;
    } else {
      listable = false;
      unableReason =
        'Unauthorized Caller: Caller is not owner of the Legend NFT.';
    }

    const isListable: IsListable = {
      listable: listable,
      unableReason: unableReason,
    };

    return isListable;
  }
}
