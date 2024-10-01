import {
  Body,
  Controller,
  Get,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { NewGiftDTO } from './dto/new-gift.dto';
import { GiftService } from './gift.service';

@Controller('gift')
export class GiftController {
  constructor(private readonly giftService: GiftService) {}

  @Post('new')
  async NewGift(@Body() giftDTO: NewGiftDTO) {
    await this.giftService.NewGift(giftDTO);
  }

  @Post('claim')
  async ClaimGift(
    @Body('id', ParseIntPipe) ownerId: number,
    @Body('assignType', ParseIntPipe) assignType: number,
  ) {
    return this.giftService.ClaimFor(ownerId, assignType);
  }

  @Post('drop')
  async DropGift(@Body('id', ParseIntPipe) ownerId: number) {
    return this.giftService.DropFor(ownerId);
  }

  @Get('gifts')
  async GetGifts() {
    return await this.giftService.GetGifts();
  }

  @Get('fetch')
  async FetchGifts(@Query('id', ParseIntPipe) ownerId: number) {
    return await this.giftService.FetchFor(ownerId);
  }

  @Get('count')
  async CountGift() {
    return await this.giftService.CountGift();
  }
}
