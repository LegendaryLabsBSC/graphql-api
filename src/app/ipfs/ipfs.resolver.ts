import { Args, Int, Mutation, Resolver } from '@nestjs/graphql';
import { IPFSService } from './ipfs.service';
import { PinataResponse } from './pinata/models/pinata-response.model';
import { PinataRequest } from './pinata/models/pinata-request.model';

@Resolver()
export class IPFSResolver {}
