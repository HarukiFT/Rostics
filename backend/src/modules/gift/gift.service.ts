import { Injectable } from '@nestjs/common';
import { Equal, Not, Repository } from 'typeorm';
import { Gift } from './gift.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { NewGiftDTO } from './dto/new-gift.dto';
import * as moment from 'moment-timezone';

@Injectable()
export class GiftService {
  constructor(
    @InjectRepository(Gift) private readonly giftRepositry: Repository<Gift>,
  ) {}

  async GetGifts() {
    const gifts = await this.giftRepositry.find({
      order: {
        createdAt: 'DESC',
      },
    });

    return gifts;
  }

  async NewGift(giftDTO: NewGiftDTO) {
    const gift = new Gift();
    gift.code = giftDTO.code;

    await this.giftRepositry.save(gift);
  }

  async ClaimFor(id: number) {
    const freeGift = await this.giftRepositry.findOne({
      where: {
        owner: Equal(0),
      },
    });

    if (!freeGift) return false;

    freeGift.owner = id;
    freeGift.updatedAt = new Date();
    await this.giftRepositry.save(freeGift);

    return true;
  }

  async FetchFor(id: number) {
    const gifts = await this.giftRepositry.find({
      where: {
        owner: id,
      },
    });

    return gifts;
  }

  async CountGift() {
    const freeGifts = await this.giftRepositry.count({
      where: {
        owner: Equal(0),
      },
    });

    const claimedGifts = await this.giftRepositry.count({
      where: {
        owner: Not(0),
      },
    });

    return {
      free: freeGifts,
      claimed: claimedGifts,
    };
  }
}
