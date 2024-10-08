import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class LikesService {
  async getLikes(universeId: string) {
    return (
      await axios.get(
        `https://games.roblox.com/v1/games/votes?universeIds=${universeId}`,
      )
    ).data.data[0];
  }
}
