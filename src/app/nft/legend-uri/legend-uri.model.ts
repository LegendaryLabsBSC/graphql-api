import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class LegendURI {
  @Field((type) => String)
  id: bigint;

  @Field()
  image: string;

  @Field()
  payload: string;
}

// @ObjectType('LegendType')
// @InputType('LegendInputType')
// export class LegendType {
//   @Field()
//   metadata: Metadata;

//   @Field()
//   tokenuri: TokenURI;
// }
