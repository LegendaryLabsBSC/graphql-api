import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class OfferDetails {
  @Field((type) => String, { nullable: true })
  expirationTime: bigint;

  @Field({ nullable: true })
  legendOwner: string;

  @Field( { nullable: true })
  isAccepted: boolean;
}
