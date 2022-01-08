import { Injectable } from '@nestjs/common';
import { BalanceOf } from './balance-of.model';
import { contractLab as lab } from 'src/contract-lab/contract-lab.service';

@Injectable()
export class BalanceOfService {
  async fetchBalanceOf(address: string): Promise<BalanceOf> {
    let balanceOf: BalanceOf = {
      balance: (await lab.token.balanceOf(address)).toString(),
    };

    return balanceOf;
  }
}
