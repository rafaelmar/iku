import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Movement extends Document {
  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  amount: number;

  @Prop({ required: true })
  date: Date;

  @Prop({ required: true, enum: ['ingreso', 'egreso'] })
  type: string;

  @Prop({ required: true })
  userId: string;
}

export const MovementSchema = SchemaFactory.createForClass(Movement);
