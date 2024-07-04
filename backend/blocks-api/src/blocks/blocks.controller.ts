// blocks/blocks.controller.ts
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { Block } from './blocks.entity';
import { BlocksService } from './blocks.service';

@Controller('blocks')
export class BlocksController {
  constructor(private readonly blocksService: BlocksService) {}

  @Get('addresses')
  getAddresses() {
    return this.blocksService.getAddresses();
  }

  @Get('details/:addressId')
  getDetail(@Param('addressId') addressId: string) {
    return this.blocksService.getDetail(addressId);
  }

}