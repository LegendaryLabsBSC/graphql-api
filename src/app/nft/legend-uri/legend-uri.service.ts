import { Injectable } from '@nestjs/common';
import { LegendURI } from './legend-uri.model';
import { contractLab as lab } from 'src/contract-lab/contract-lab.service';

@Injectable()
export class LegendURIService {
  nonExistentLegend: any = {
    id: '0',
    image:
      'https://gateway.pinata.cloud/ipfs/QmNks6pnRDgPRyTjRFuVy8mCb8WJ1yrY9JLwgTKuJzdsrF',
    payload: 'Invalid Legend ID',
  };

  parseData(data: string, id: string): LegendURI {
    const pinataGateway = 'https://gateway.pinata.cloud/ipfs/';

    const uri: any = {};

    // No payload if hatched: Not set in stone
    if (/[,]/.test(data) === false) {
      uri['id'] = id;
      uri['image'] = pinataGateway + data.slice(7);
    } else {
      const uriData: string[] = data.split(',', 3);

      uri['id'] = uriData[0];
      uri['image'] = pinataGateway + uriData[1].slice(7);
      uri['payload'] = uriData[2];
    }

    return uri;
  }

  async fetchLegendURI(id: string): Promise<LegendURI> {
    try {
      const URIData: string = await lab.nft.fetchLegendURI(id);
      const legendURI: LegendURI = this.parseData(URIData, id);

      return legendURI;
    } catch (error) {
      return this.nonExistentLegend;
    }
  }
}
