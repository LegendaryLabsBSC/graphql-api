import { Args, Int, Mutation, Resolver } from '@nestjs/graphql';
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
}
