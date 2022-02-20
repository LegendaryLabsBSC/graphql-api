import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class PinataRequest {
  @Field()
  pinName: string;

  @Field()
  pinContent: string;
}
