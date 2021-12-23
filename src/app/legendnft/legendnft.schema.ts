import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Mongoose } from 'mongoose';

class Metadata {
  // id: BigInt!
  id: BigInt;
  season: String;
  prefix: String;
  postfix: String;
  parents: [BigInt];
  // parent1: BigInt;
  // parent2: BigInt;
  birthday: BigInt;
  blendingInstancesUsed: BigInt;
  totalOffspring: BigInt;
  legendCreator: String;
  // owner: User
  isLegendary: Boolean;
  isHatched: Boolean;
  isDestroyed: Boolean;
}

class TokenURI {
  id: BigInt;
  contentURI: String;
  tokenIPFSPath: String;
  payload: String;
}

@Schema()
export class LegendNFT {
  @Prop()
  metadata: Metadata;

  @Prop()
  tokenuri: TokenURI;
}

export type LegendNFTDocument = LegendNFT & Document;
export const LegendNFTSchema = SchemaFactory.createForClass(LegendNFT);
