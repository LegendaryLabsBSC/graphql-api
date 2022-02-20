import { HttpService, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { map, lastValueFrom } from 'rxjs';
import { PinataRequest } from './models/pinata-request.model';
import { PinataResponse } from './models/pinata-response.model';

@Injectable()
export class PinataService {
  constructor(private httpService: HttpService) {}

  baseUrl: string = 'https://api.pinata.cloud';

  async pinJSONtoIPFS({
    pinName,
    pinContent,
  }: PinataRequest): Promise<AxiosResponse<PinataResponse>> {
    const endpoint: string = this.baseUrl + '/pinning/pinJSONToIPFS';

    const pinData: any = {
      pinataMetadata: {
        name: pinName,
      },
      pinataContent: JSON.parse(pinContent),
    };

    const data = await lastValueFrom(
      this.httpService
        .post(endpoint, pinData, {
          maxContentLength: -1,
          headers: {
            pinata_api_key: process.env.PINATA_API_KEY,
            pinata_secret_api_key: process.env.PINATA_SECRET_KEY,
          },
        })
        .pipe(map((response) => response.data)),
    );

    return data;
  }
}
