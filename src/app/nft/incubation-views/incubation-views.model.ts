import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class IncubationViews {
  @Field()
  view1: string;

  @Field()
  view2: string;

  @Field()
  view3: string;

  @Field()
  view4: string;

  @Field()
  view5: string;
}
