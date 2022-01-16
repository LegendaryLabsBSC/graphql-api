import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class IsHatchable {
  @Field()
  hatchable: boolean;

  @Field({ nullable: true })
  unableReason?: string;
}

