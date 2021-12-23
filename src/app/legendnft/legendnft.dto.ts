import { ObjectType, Field, InputType, ID } from '@nestjs/graphql';

@ObjectType('Metadata')
@InputType('MetadataInput')
class Metadata {
  @Field((type) => ID)
  id: BigInt;

  @Field()
  season: String;

  @Field()
  prefix: String;

  @Field()
  postfix: String;

  @Field((type) => Number)
  parent1: BigInt;

  @Field((type) => Number)
  parent2: BigInt;

  @Field((type) => Number)
  birthday: BigInt;

  @Field((type) => Number)
  blendingInstancesUsed: BigInt;

  @Field((type) => Number)
  totalOffspring: BigInt;

  @Field()
  legendCreator: String;

  @Field()
  isLegendary: Boolean;

  @Field()
  isHatched: Boolean;

  @Field()
  isDestroyed: Boolean;
}

@ObjectType('TokenURI')
@InputType('TokenURIInput')
class TokenURI {
  @Field((type) => ID)
  id: BigInt;

  @Field()
  contentURI: String;

  @Field()
  tokenIPFSPath: String;

  @Field()
  payload: String;
}

@ObjectType('LegendType')
@InputType('LegendInputType')
export class LegendType {
  @Field()
  metadata: Metadata;

  @Field()
  tokenuri: TokenURI;
}
