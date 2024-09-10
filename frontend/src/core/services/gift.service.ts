import { api } from "../api";
import { routesConfig } from "../config";

import { GiftModel } from "../models";

export interface GiftCount {
  free: number;
  claimed: number;
}

export interface UnmappedGifts {
  owner: number;
  promo: string;
  createdAt: string;
  updatedAt?: string;
  id: number;
}

export const getCount = async (): Promise<GiftCount> => {
  const counts = (await api.get(routesConfig.giftRoutes.count))
    .data as GiftCount;

  return counts;
};

export const insert = async (code: string) => {
  return await api.post(routesConfig.giftRoutes.insert, {
    code: code,
  });
};

export const getGifts = async (): Promise<GiftModel.Data[]> => {
  const gifts = (await api.get(routesConfig.giftRoutes.gifts))
    .data as UnmappedGifts[];

  return gifts.map((gift) => ({
    ...gift,
    createdAt: new Date(gift.createdAt),
    updatedAt: gift.updatedAt ? new Date(gift.updatedAt) : undefined,
  }));
};
