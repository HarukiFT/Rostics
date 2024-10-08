import { Inject, Injectable } from '@nestjs/common';
import axios from 'axios';
import { Cache } from 'cache-manager';

@Injectable()
export class LikesService {
  constructor(@Inject('CACHE_MANAGER') private readonly cacheManager: Cache) {}

  async getLikes(universeId: string) {
    const cached = await this.cacheManager.get(universeId);
    if (cached) {
      return cached;
    }

    const data = (
      await axios.get(
        `https://games.roblox.com/v1/games/votes?universeIds=${universeId}`,
      )
    ).data.data[0];

    this.cacheManager.set(universeId, data, 30000);

    return data;
  }
}
