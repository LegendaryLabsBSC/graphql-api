import { Injectable } from '@nestjs/common';
import { AuctionDetails } from './auction-details.model';
import { contractLab as lab } from 'src/contract-lab/contract-lab.service';

@Injectable()
export class AuctionDetailsService {
  parseData(data: AuctionDetails): AuctionDetails {
    const auctionDetails: any = {};

    const keys = Object.keys(data).slice(5);
    const values = `${data}`.split(',');

    keys.forEach((key: string, index) => {
      auctionDetails[key] = values[index];
    });

    auctionDetails['durationInDays'] =
      parseInt(auctionDetails.duration) / 86400;

    return auctionDetails;
  }

  async fetchAuctionDetails(id: string): Promise<AuctionDetails> {
    let auctionDetails: AuctionDetails;

    try {
      auctionDetails = await lab.marketplace.fetchAuctionDetails(id);
      auctionDetails = this.parseData(auctionDetails);

      if (`${auctionDetails.isInstantBuy}` === 'true') {
        auctionDetails['instantBuyPrice'] = (
          await lab.marketplace.fetchInstantBuyPrice(id)
        ).toString();
      } else {
        auctionDetails['instantBuyPrice'] = null;
      }

      auctionDetails['bidders'] = await lab.marketplace.fetchBidders(id);
      
    } catch (error) {
      // console.error(error);
      auctionDetails = {
        duration: null,
        startingPrice: null,
        highestBid: null,
        highestBidder: null,
        isInstantBuy: null,
        durationInDays: null,
        instantBuyPrice: null,
        bidders: null,
      };
    }

    return auctionDetails;
  }
}
