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

  parseData(data: String): LegendURI {
    const uri: any = {};
    const uriData = data.split(',', 3);

    const pinataGateway = 'https://gateway.pinata.cloud/ipfs/';
    const IPFSHash: string = uriData[1].slice(7);

    uri['id'] = uriData[0];
    uri['image'] = pinataGateway + IPFSHash;
    uri['payload'] = uriData[2];

    return uri;
  }

  async fetchLegendURI(id: string): Promise<LegendURI> {
    try {
      const URIData: string = await lab.nft.fetchLegendURI(id);
      const legendURI: LegendURI = this.parseData(URIData);
      // console.log(URIData);

      return legendURI;
    } catch (error) {
      return this.nonExistentLegend;
    }
  }
}
