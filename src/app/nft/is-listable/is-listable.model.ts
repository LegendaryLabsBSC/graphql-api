import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class IsListable {
  @Field()
  listable: boolean;

  @Field({ nullable: true })
  unableReason?: string;
}
