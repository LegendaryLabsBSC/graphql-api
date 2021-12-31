import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class IsHatchable {
  @Field()
  isHatchable: boolean;
}
