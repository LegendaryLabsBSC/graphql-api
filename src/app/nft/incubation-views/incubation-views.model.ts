import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class IncubationViews {
  @Field()
  incubationView1: string;

  @Field()
  incubationView2: string;

  @Field()
  incubationView3: string;

  @Field()
  incubationView4: string;

  @Field()
  incubationView5: string;
}

