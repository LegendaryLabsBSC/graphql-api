import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class ChildContracts {
  @Prop()
  legendsNFT: String;

  @Prop()
  legendToken: String;

  @Prop()
  legendRejuvenation: String;

  @Prop()
  legendsMarketplace: String;

  @Prop()
  legendsMatchingBoard: String;
}

export type ChildContractsDocument = ChildContracts & Document;
export const ChildContractsSchema = SchemaFactory.createForClass(ChildContracts);
