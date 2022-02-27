import { Injectable } from '@nestjs/common';
import { IsListable } from './is-listable.model';
import { contractLab as lab } from 'src/contract-lab/contract-lab.service';

@Injectable()
export class IsListableService {
  async fetchIsListable(id: string, address: string): Promise<IsListable> {
    let isListable: IsListable;

    const isHatched = await lab.admin.isHatched(id);
    if (isHatched === false) {
      isListable = {
        listable: false,
        unableReason: 'Legend NFT Not Hatched',
      };

      return isListable;
    }

    const legendOwner = await lab.nft.ownerOf(id);
    if (legendOwner !== address) {
      isListable = {
        listable: false,
        unableReason:
          'Unauthorized Caller: Caller is not owner of the Legend NFT.',
      };

      return isListable;
    }

    isListable = {
      listable: true,
    };

    return isListable;
  }
}
