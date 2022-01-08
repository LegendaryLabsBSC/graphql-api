import { Injectable } from '@nestjs/common';
import { TokenDetails } from './token-details.model';
import { contractLab as lab } from 'src/contract-lab/contract-lab.service';

@Injectable()
export class TokenDetailsService {
  async fetchTokenDetails(): Promise<TokenDetails> {
    let tokenDetails: TokenDetails = {
      name: await lab.token.name(),
      symbol: await lab.token.symbol(),
      totalSupply: (await lab.token.totalSupply()).toString(),
    };

    return tokenDetails;
  }
}
