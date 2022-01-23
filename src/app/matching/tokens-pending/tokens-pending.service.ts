import { Injectable } from '@nestjs/common';
import { TokensPending } from './tokens-pending.model';
import { contractLab as lab } from 'src/contract-lab/contract-lab.service';

//todo: function uses msg.sender ; how to make work with API?

@Injectable()
export class TokensPendingService {
  async fetchTokensPending(): Promise<TokensPending> {
    const tokensPending: TokensPending = {
      amount: (await lab.matching.fetchLegendMatching()).toString(),
    };

     //todo:parse as eth values

    return tokensPending;
  }
}
