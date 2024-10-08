import { Controller, Get, Ip, Query } from '@nestjs/common';
import { LikesService } from './likes.service';

@Controller('likes')
export class LikesController {
  constructor(private readonly likesService: LikesService) {}

  @Get('/get')
  async getLikes(@Query('universeId') universeId: string) {
    return await this.likesService.getLikes(universeId);
  }

  @Get('/temp')
  async temp(@Ip() ip: string) {
    console.log(ip);
  }
}
