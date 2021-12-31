import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class LegendURI {
  @Field((type) => String)
  id: bigint;

  @Field()
  image: string;

  @Field({ nullable: true })
  payload?: string;
}
