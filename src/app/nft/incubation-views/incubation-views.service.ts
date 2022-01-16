import { Injectable } from '@nestjs/common';
import { IncubationViews } from './incubation-views.model';
import { contractLab as lab } from 'src/contract-lab/contract-lab.service';

@Injectable()
export class IncubationViewsService {
  async fetchIncubationViews(): Promise<IncubationViews> {
    const viewsData: string[] = await lab.nft.fetchIncubationViews();

    const pinataGateway = 'https://gateway.pinata.cloud/ipfs/';

    const incubationViews: IncubationViews = {
      view1: pinataGateway + viewsData[0].slice(7),
      view2: pinataGateway + viewsData[1].slice(7),
      view3: pinataGateway + viewsData[2].slice(7),
      view4: pinataGateway + viewsData[3].slice(7),
      view5: pinataGateway + viewsData[4].slice(7),
    };

    return incubationViews;
  }
}
