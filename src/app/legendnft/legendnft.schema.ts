import { ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Mongoose } from 'mongoose';

@Schema()
export class LegendNFT {
  @Prop()
  id: String;
  @Prop()
  season: String;
  @Prop()
  prefix: String;
  @Prop()
  postfix: String;
  @Prop()
  parent1: String;
  @Prop()
  parent2: String;
  @Prop()
  birthday: String;
  @Prop()
  blendingInstancesUsed: String;
  @Prop()
  totalOffspring: String;
  @Prop()
  legendCreator: String;
  @Prop()
  isLegendary: Boolean;
  @Prop()
  isHatched: Boolean;
  @Prop()
  isDestroyed: Boolean;
}
// @Schema()
// export class TokenURI {
//   id: BigInt;
//   contentURI: String;
//   tokenIPFSPath: String;
//   payload: String;
// }

// @Schema()
// export class LegendNFT {
//   @Prop()
//   metadata: Metadata;

//   @Prop()
//   tokenuri: TokenURI;
// }

export type LegendNFTDocument = LegendNFT & Document;
export const LegendNFTSchema = SchemaFactory.createForClass(LegendNFT);
