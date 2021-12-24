import { ObjectType, Field, InputType, ID } from '@nestjs/graphql';
import { type } from 'os';

@ObjectType('LegendType')
@InputType('LegendTypeInput')
export class LegendType {
  @Field((type) => String)
  id: BigInt;

  @Field()
  season: String;

  @Field()
  prefix: String;

  @Field()
  postfix: String;

  @Field((type) => String)
  parent1: BigInt;

  @Field((type) => String)
  parent2: BigInt;

  @Field((type) => String)
  birthday: BigInt;

  @Field((type) => String)
  blendingInstancesUsed: BigInt;

  @Field((type) => String)
  totalOffspring: BigInt;

  @Field()
  legendCreator: String;

  @Field((type) => String)
  isLegendary: Boolean;

  @Field((type) => String)
  isHatched: Boolean;

  @Field((type) => String)
  isDestroyed: Boolean;
}

// @ObjectType('TokenURI')
// @InputType('TokenURIInput')
// class TokenURI {
//   @Field((type) => ID)
//   id: BigInt;

//   @Field()
//   contentURI: String;

//   @Field()
//   tokenIPFSPath: String;

//   @Field()
//   payload: String;
// }

// @ObjectType('LegendType')
// @InputType('LegendInputType')
// export class LegendType {
//   @Field()
//   metadata: Metadata;

//   @Field()
//   tokenuri: TokenURI;
// }
