import { Module } from '@nestjs/common';
import { GiftController } from './gift.controller';
import { GiftService } from './gift.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gift } from './gift.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Gift])],
  controllers: [GiftController],
  providers: [GiftService],
})
export class GiftModule {}
