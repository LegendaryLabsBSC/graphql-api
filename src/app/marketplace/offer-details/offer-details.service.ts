import { Injectable } from '@nestjs/common';
import { OfferDetails } from './offer-details.model';
import { contractLab as lab } from 'src/contract-lab/contract-lab.service';

@Injectable()
export class OfferDetailsService {
  parseData(data: any): OfferDetails {
    const offerDetails: OfferDetails = {
      expirationTime: data.expirationTime.toString(),
      legendOwner: data.legendOwner,
      isAccepted: data.isAccepted,
    };

    //todo: offerDetails['durationInDays'] =
    //   parseInt(offerDetails.duration) / 86400;

    return offerDetails;
  }

  async fetchOfferDetails(id: string): Promise<OfferDetails> {
    let offerDetails: OfferDetails;

    try {
      offerDetails = await lab.marketplace.fetchOfferDetails(id);
      offerDetails = this.parseData(offerDetails);
    } catch (e) {
      if (e.reason === 'missing revert data in call exception') {
        offerDetails = {
          expirationTime: null,
          legendOwner: null,
          isAccepted: null,
        };
      } else {
        throw new Error('Unknown API Error Occurred');
      }
    }

    return offerDetails;
  }
}
