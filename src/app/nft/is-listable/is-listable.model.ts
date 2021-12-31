import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class IsListable {
  @Field()
  isListable: boolean;

  @Field({ nullable: true })
  unableReason?: string;
}
