import { Injectable } from '@nestjs/common';
import { PinataService } from '../ipfs/pinata/pinata.service';
import { LegendURI } from '../nft/legend-uri/legend-uri.model';
import { LegendURIService } from '../nft/legend-uri/legend-uri.service';

@Injectable()
export class LegendGeneratorService {
  constructor(
    private readonly legendURIService: LegendURIService,
    private readonly pinataService: PinataService,
  ) {}

  private async gatherDNA(payload: string): Promise<string | undefined> {
    // if blended gather parents DNA
    if (payload.includes('+')) {
      const parents: string[] = payload.split('+');
      console.log(parents[1], 'ff', parents[0], 'f');

      //pull parent[1] dna from ipfs metadata query
      //pull parent[2] dna from ipfs metadata query

      // blend DNA

      return 'fakednaya';
    }

    // if promo gather promo DNA or trigger a random DNA generation
    const promoId = '21'; // temp payload 20 or 21 for current testing

    const { keyvalues }: any = await this.pinataService.readPinFromPinata(
      promoId,
    ); // todo: make more reusable

    // console.log(keyvalues);

    if (keyvalues?.promoDNA) return keyvalues.promoDNA;

    return;
  }

  async generateHatchedLegend(id: string): Promise<string> {
    // determine if promo or blended
    const { payload }: LegendURI = await this.legendURIService.fetchLegendURI(
      id,
    );

    // console.log(payload);

    let hatchlingDNA: string | undefined = await this.gatherDNA(payload); // type may change when final generator DNA is ready

    // >> write DNA to CSV and &
    //& >>> return STRONG,STATIC,NOT-HAZARDOUS id back // todo:

    // call generator to mint legend with id // todo:

    // IPFS generated image

    // return IPFS hash to client
    const ipfsHash: string = 'temphashtemp';
    return;
  }
}
