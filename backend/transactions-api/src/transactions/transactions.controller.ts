import { Controller, Get, Post, Body, HttpException, HttpStatus, HttpCode } from '@nestjs/common';
import { TransactionsService } from './transactions.service';

@Controller('transactions')
export class TransactionsController {
  constructor(private transactionsService: TransactionsService) {}

  @Get('/history')
  async getTransactionHistory() {
    try {
      return await this.transactionsService.getTransactionHistory();
    } catch (error) {
      throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('/send')
  @HttpCode(HttpStatus.CREATED)
  async sendTransfer(@Body('source') source: string, @Body('destination') destination: string, @Body('amount') amount: number) {
    try {
      if (!source || !destination || !amount) {
        throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
      }
      return await this.transactionsService.sendTransfer(source, destination, amount);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
