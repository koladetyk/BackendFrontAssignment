import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransactionsModule } from './transactions/transactions.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  
  imports: [
    TransactionsModule,
    //MongooseModule.forRoot('mongodb+srv://Kolade:bognU0PR8GOatKC5@cluster0.ldpckoi.mongodb.net/'),
    MongooseModule.forRoot('mongodb+srv://Kolade:bognU0PR8GOatKC5@cluster0.ldpckoi.mongodb.net/myapp'),

  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
