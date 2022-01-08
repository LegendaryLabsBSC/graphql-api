import { Injectable } from '@nestjs/common';
import { OfferDetails } from './offer-details.model';
import { contractLab as lab } from 'src/contract-lab/contract-lab.service';

@Injectable()
export class OfferDetailsService {
  parseData(data: OfferDetails): OfferDetails {
    const offerDetails: any = {};

    const keys = Object.keys(data).slice(3);
    const values = `${data}`.split(',');

    keys.forEach((key: string, index) => {
      offerDetails[key] = values[index];
    });

    // offerDetails['durationInDays'] =
    //   parseInt(offerDetails.duration) / 86400;

    return offerDetails;
  }

  async fetchOfferDetails(id: string): Promise<OfferDetails> {
    let offerDetails: OfferDetails;

    try {
      offerDetails = await lab.marketplace.fetchOfferDetails(id);
      offerDetails = this.parseData(offerDetails);
    } catch (error) {
      // console.error(error);
      offerDetails = {
        expirationTime: null,
        legendOwner: null,
        isAccepted: null,
      };
    }

    return offerDetails;
  }
}
