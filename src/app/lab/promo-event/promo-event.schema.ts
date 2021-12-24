import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class PromoEvent {
  @Prop()
  promoName: String;

  @Prop()
  promoId: String;

  @Prop()
  startTime: String;

  @Prop()
  expireTime: String;

  @Prop()
  isUnrestricted: Boolean;

  @Prop()
  isTicketLimit: Boolean;

  @Prop()
  isPromoClosed: Boolean;

  @Prop()
  ticketsClaimed: String;

  @Prop()
  ticketsRedeemed: String;
}

export type PromoEventDocument = PromoEvent & Document;
export const PromoEventSchema = SchemaFactory.createForClass(PromoEvent);
