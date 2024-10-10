import { Injectable } from '@nestjs/common';
import { Equal, Not, Repository } from 'typeorm';
import { Gift } from './gift.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { NewGiftDTO } from './dto/new-gift.dto';

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
    gift.assignType = parseInt(giftDTO.assignType);

    await this.giftRepositry.save(gift);
  }

  async DropFor(id: number) {
    // Fortune promo
    const freeGift = await this.giftRepositry.findOne({
      where: {
        assignType: 1,
        owner: Equal(0),
      },
    });

    if (!freeGift) return false;

    freeGift.owner = id;
    freeGift.updatedAt = new Date();
    await this.giftRepositry.save(freeGift);

    return true;
  }

  async ExistFor(id: number, assignType: number) {
    const lastGift = await this.giftRepositry.find({
      where: {
        assignType: Equal(assignType),
      },
      order: {
        updatedAt: 'desc',
      },
    });

    if (lastGift[0].updatedAt) {
      const passed = new Date().getTime() - lastGift[0].updatedAt.getTime();
      const minutes = passed / 1000 / 60;

      if (minutes < 500) {
        return lastGift[0];
      }
    }

    return await this.giftRepositry.findOne({
      where: {
        assignType: Equal(assignType),
        owner: Equal(id),
      },
    });
  }

  async ClaimFor(id: number, assignType: number) {
    const freeGift = await this.giftRepositry.findOne({
      where: {
        assignType: assignType,
        owner: Equal(0),
      },
    });

    if (!freeGift) return false;

    freeGift.owner = id;
    freeGift.updatedAt = new Date();
    await this.giftRepositry.save(freeGift);

    return freeGift.code;
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
