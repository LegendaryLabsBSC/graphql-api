import { Injectable } from '@nestjs/common';
import { AuctionDetails } from './auction-details.model';
import { contractLab as lab } from 'src/contract-lab/contract-lab.service';

@Injectable()
export class AuctionDetailsService {
  parseData(data: any): AuctionDetails {
    const auctionDetails: any = {
      duration: data.duration.toString(),
      startingPrice: data.startingPrice.toString(),
      highestBid: data.highestBid.toString(),
      highestBidder: data.highestBidder,
      isInstantBuy: data.isInstantBuy,
      durationInDays: parseInt(data.duration) / 86400,
    };

    //todo: parse values with eth numbers

    return auctionDetails;
  }

  async fetchAuctionDetails(id: string): Promise<AuctionDetails> {
    let auctionDetails: AuctionDetails;

    try {
      const auctionData = await lab.marketplace.fetchAuctionDetails(id);
      auctionDetails = this.parseData(auctionData);

      if (`${auctionDetails.isInstantBuy}` === 'true') {
        auctionDetails['instantBuyPrice'] = (
          await lab.marketplace.fetchInstantBuyPrice(id)
        ).toString();
      } else {
        auctionDetails['instantBuyPrice'] = null;
      }

      auctionDetails['bidders'] = await lab.marketplace.fetchBidders(id);
      auctionDetails['isExpired'] = await lab.marketplace.isExpired(id);
    } catch (e) {
      if (e.reason === 'missing revert data in call exception') {
        auctionDetails = {
          duration: null,
          startingPrice: null,
          highestBid: null,
          highestBidder: null,
          isInstantBuy: null,
          durationInDays: null,
          instantBuyPrice: null,
          bidders: null,
          isExpired: null,
        };
      } else {
        throw new Error('Unknown API Error Occurred');
      }
    }

    return auctionDetails;
  }
}
