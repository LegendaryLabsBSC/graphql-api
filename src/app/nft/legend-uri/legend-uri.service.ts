import { Injectable } from '@nestjs/common';
import { LegendURI } from './legend-uri.model';
import { contractLab as lab } from 'src/contract-lab/contract-lab.service';

@Injectable()
export class LegendURIService {
  nonexistentLegend: any = {
    id: 0,
    image:
      'https://gateway.pinata.cloud/ipfs/QmNks6pnRDgPRyTjRFuVy8mCb8WJ1yrY9JLwgTKuJzdsrF',
    payload: 'Nonexistent Legend ID',
  };

  parseData(data: string, legendId: string): LegendURI {
    let id: string;
    let image: string;
    let payload: string;

    const pinataGateway = 'https://gateway.pinata.cloud/ipfs/';

    // No payload if hatched; Not set in stone
    if (/[,]/.test(data) === false) {
      id = legendId;
      image = pinataGateway + data.slice(7);
    } else {
      const uri: string[] = data.split(',', 3);

      id = uri[0];
      image = pinataGateway + uri[1].slice(7);
      payload = uri[2];
    }

    const legendURI: LegendURI = {
      id: parseInt(id),
      image: image,
      payload: payload,
    };

    return legendURI;
  }

  async fetchLegendURI(id: string): Promise<LegendURI> {
    let URIData: string;

    try {
      URIData = await lab.nft.fetchLegendURI(id);
    } catch (e) {
      if (e.reason === 'missing revert data in call exception') {
        const legendURI: LegendURI = this.nonexistentLegend;

        return legendURI;
      } else {
        throw new Error('Unknown API Error Occurred');
      }
    }

    const legendURI: LegendURI = this.parseData(URIData, id);

    return legendURI;
  }
}
