import { Injectable } from '@nestjs/common';
import { Equal, Not, Repository } from 'typeorm';
import { Gift } from './gift.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { NewGiftDTO } from './dto/new-gift.dto';

const assignTypes = [
  'Шефбургер',
  '15%',
  '10%',
  'Мороженное',
  '3 наггетса',
  'Окно',
  '100 робуксов',
  '800 робуксов',
];

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

  async GetStats() {
    return (
      await this.giftRepositry
        .createQueryBuilder('gift')
        .select('gift.assignType', 'assignType')
        .addSelect('COUNT(1)', 'count')
        .where('gift.owner != 0')
        .groupBy('gift.assignType')
        .getRawMany()
    ).map((row) => ({
      type: assignTypes[row.assignType - 1],
      count: row.count,
    }));
  }

  async ExistFor(id: number, assignType: number) {
    const lastGift = await this.giftRepositry.find({
      where: {
        assignType: assignType,
      },
      order: {
        updatedAt: 'asc',
      },
    });

    if (lastGift[0].updatedAt) {
      const passed = new Date().getTime() - lastGift[0].updatedAt.getTime();
      const minutes = passed / 1000 / 60;

      if (minutes < 180) {
        return lastGift[0];
      }
    }

    const freeGift = await this.giftRepositry.findOne({
      where: {
        assignType: assignType,
        owner: 0,
      },
    });

    if (!freeGift) return lastGift[0];

    return await this.giftRepositry.findOne({
      where: {
        assignType: assignType,
        owner: id,
      },
    });
  }

  async ClaimFor(id: number, assignType: number) {
    const freeGift = await this.giftRepositry.findOne({
      where: {
        assignType: assignType,
        owner: 0,
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
