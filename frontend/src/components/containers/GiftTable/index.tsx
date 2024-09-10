import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { TableGrid } from "../../common/simple/TableGrid";
import { GiftModel } from "../../../core/models";
import { giftService } from "../../../core/services";
import { GiftColumns } from "./data";

export const GiftTable: React.FC = () => {
  const [gifts, setGifts] = useState<GiftModel.Data[]>([]);

  useEffect(() => {
    giftService.getGifts().then((gifts) => {
      setGifts(gifts);
    });
  }, []);

  return <TableGrid columns={GiftColumns} rows={gifts} height={800} />;
};
