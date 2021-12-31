import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class IsBlendable {
  @Field()
  isBlendable: boolean;

  @Field({ nullable: true })
  unableReason?: string;
}
