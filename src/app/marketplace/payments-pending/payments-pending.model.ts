import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class PaymentsPending {
  @Field((type) => String)
  listingPayments: bigint;

  @Field((type) => String)
  royaltiesAccrued: bigint;
}
