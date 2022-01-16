import { Injectable } from '@nestjs/common';
import { OwnerOfLegend } from './owner-of-legend.model';
import { contractLab as lab } from 'src/contract-lab/contract-lab.service';

@Injectable()
export class OwnerOfLegendService {
  async fetchOwnerOfLegend(id: string): Promise<OwnerOfLegend> {
    let address: string;

    try {
      address = await lab.nft.ownerOf(id);
    } catch (e) {
      if (e.reason === 'ERC721: owner query for nonexistent token') {
        address = 'Nonexistent Legend ID';
      } else {
        throw new Error('Unknown API Error Occurred');
      }
    }

    const ownerOfLegend: OwnerOfLegend = {
      address: address,
    };

    return ownerOfLegend;
  }
}
