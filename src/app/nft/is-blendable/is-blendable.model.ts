import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class IsBlendable {
  @Field()
  blendable: boolean;

  @Field({ nullable: true })
  unableReason?: string;
}
