import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class LegendURI {
  @Field((type) => Int)
  id: number;

  @Field()
  image: string;

  @Field({ nullable: true })
  payload: string;
}
