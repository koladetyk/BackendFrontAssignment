// transactions.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Transaction } from './transaction.schema'; 
const crypto = require('crypto');


@Injectable()
export class TransactionsService {

  constructor(
    @InjectModel(Transaction.name) private transactionModel: Model<Transaction>,
  ) {}

 async getTransactionHistory() {
  // Query the database using the TransactionModel to find all transactions
  const transactions = await this.transactionModel.find({});
  return transactions;
}

async sendTransfer(source: string, destination: string, amount: number): Promise<Transaction> {
  const transactionData = { source, destination, amount };
  const receiptHash = crypto.createHash('sha256').update(JSON.stringify(transactionData)).digest('hex');

  const newTransaction = new this.transactionModel({
    source,
    destination,
    amount,
    status: "PENDING", 
    gasUsed: 2100,
    receiptHash,
  });

  // Save the new transaction to the database
  return await newTransaction.save();
}
}
