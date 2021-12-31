import { Injectable } from '@nestjs/common';
import { OwnerOfLegend } from './owner-of-legend.model';
import { contractLab as lab } from 'src/contract-lab/contract-lab.service';

@Injectable()
export class OwnerOfLegendService {
  async fetchOwnerOfLegend(id: string): Promise<OwnerOfLegend> {
    const ownerOfLegend: any = {};

    ownerOfLegend['address'] = await lab.nft.ownerOf(id);

    return ownerOfLegend;
  }
}
