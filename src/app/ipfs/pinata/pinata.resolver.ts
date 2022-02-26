import { Args, Int, Mutation, Resolver, Query } from '@nestjs/graphql';
import { PinataService } from './pinata.service';
import { PinataResponse } from './models/pinata-response.model';
import { PinataRequest } from './models/pinata-request.model';

@Resolver()
export class PinataResolver {
  constructor(private readonly pinataService: PinataService) {}

  @Mutation((returns) => PinataResponse)
  async pinJSONtoIPFS(
    @Args({ name: 'pinataReq', type: () => PinataRequest })
    pinataReq: PinataRequest,
  ) {
    return this.pinataService.pinJSONtoIPFS(pinataReq);
  }

  @Query((returns) => PinataResponse)
  async readPinFromPinata(@Args('id') id: string) {
    this.pinataService.readPinFromPinata(id)
    return;
  }
}
