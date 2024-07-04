import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Transaction {
  @Prop({ required: true })
  source: string;

  @Prop({ required: true })
  destination: string;

  @Prop({ required: true })
  amount: number;

  @Prop()
  status: string;

  @Prop()
  gasUsed?: number;

  @Prop()
  receiptHash?: string;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
