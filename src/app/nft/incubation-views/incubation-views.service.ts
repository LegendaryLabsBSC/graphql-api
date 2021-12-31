import { Injectable } from '@nestjs/common';
import { IncubationViews } from './incubation-views.model';
import { contractLab as lab } from 'src/contract-lab/contract-lab.service';

@Injectable()
export class IncubationViewsService {
  parseData(data: string[]): IncubationViews {
    const incubationViews: any = {};

    const pinataGateway = 'https://gateway.pinata.cloud/ipfs/';

    incubationViews['view1'] = pinataGateway + data[0].slice(7);
    incubationViews['view2'] = pinataGateway + data[1].slice(7);
    incubationViews['view3'] = pinataGateway + data[2].slice(7);
    incubationViews['view4'] = pinataGateway + data[3].slice(7);
    incubationViews['view5'] = pinataGateway + data[4].slice(7);

    return incubationViews;
  }

  async fetchIncubationViews(): Promise<IncubationViews> {
    const viewsData: string[] = await lab.nft.fetchIncubationViews();
    const incubationViews: IncubationViews = this.parseData(viewsData);

    return incubationViews;
  }
}
