import { HttpService, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import path from 'path';
import { map, lastValueFrom } from 'rxjs';
import { PinataRequest } from './models/pinata-request.model';
import { PinataResponse } from './models/pinata-response.model';
import * as fs from 'fs';

@Injectable()
export class PinataService {
  constructor(private httpService: HttpService) {}

  baseUrl: string = 'https://api.pinata.cloud';

  async readPinFromPinata(id: string): Promise<any> {
    const endpoint: string =
      this.baseUrl +
      `/data/pinList?metadata[keyvalues][promoId]={"value":${id},"op":"eq"}`; // todo: make promoId => id ; reusable

    const data = await lastValueFrom(
      this.httpService
        .get(endpoint, {
          maxContentLength: -1,
          headers: {
            pinata_api_key: process.env.PINATA_API_KEY,
            pinata_secret_api_key: process.env.PINATA_SECRET_KEY,
          },
        })
        .pipe(map((response) => response.data)),
    );

    return data.rows[0].metadata;
  }

  async pinJSONtoIPFS({
    pinName,
    pinContent,
  }: PinataRequest): Promise<AxiosResponse<PinataResponse>> {
    const endpoint: string = this.baseUrl + '/pinning/pinJSONToIPFS';

    console.log(pinContent);

    const pinData: any = {
      pinataMetadata: {
        name: pinName,
        keyvalues: JSON.parse(pinContent), //todo:
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

  // async pinFileToIPFS(imgId: string): Promise<PinataResponse> {
  //   const endpoint: string = this.baseUrl + '/pinning/pinFileToIPFS';

  //   const generatorDirectory: string = './temp/';
  //   const generatedImage: string = `${imgId}.png`;

  //   let data: any = new FormData();
  //   const image: string = path.join(
  //     __dirname,
  //     '../phoenixGenerator_1.1/Engine/Content/Images/',
  //   );

  //   data.append('file', fs.createReadStream(image));

  //   const metadata = JSON.stringify({
  //     name: 'testname',

  //     keyvalues: {
  //       exampleKey: 'exampleValue',
  //     },
  //   });

  //   data.append('pinataMetadata', metadata);

  //   const pinataOptions = JSON.stringify({
  //     cidVersion: 1,
  //     // wrapWithDirectory: true
  //   });

  //   data.append('pinataOptions', pinataOptions);

  //   const pinataResponse: PinataResponse = await lastValueFrom(
  //     this.httpService
  //       .post(endpoint, data, {
  //         maxContentLength: -1,
  //         headers: {
  //           'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
  //           pinata_api_key: process.env.PINATA_API_KEY,
  //           pinata_secret_api_key: process.env.PINATA_SECRET_KEY,
  //         },
  //       })
  //       .pipe(map((response) => response.data)),
  //   );

  //   return pinataResponse;
  // }
}
