import { useEffect, useState } from "react";

import { Box, Paper, Stack } from "@mui/material";
import { OverviewPart } from "./styled";
import { giftService } from "../../../core/services";
import { count } from "console";
import { GiftCounter } from "../../common/simple/GiftCounter";
import { GiftCount } from "../../../core/services/gift.service";
import { Dropzone } from "../../common/smart/Dropzone";

export const GiftOverview: React.FC = () => {
  const [counts, setCounts] = useState<GiftCount>();

  useEffect(() => {
    giftService.getCount().then((counts) => {
      setCounts(counts);
    });
  }, []);

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      width={1}
      height={1}
    >
      <Paper sx={{ width: 1, flexGrow: 0.49 }} elevation={3}>
        <Dropzone
          callback={(codes) => {
            console.log(codes);
            codes.forEach((code) => {
              giftService.insert(code).then((data) => {
                console.log(data);
              });
            });
          }}
        />
      </Paper>

      <Stack
        direction={"row"}
        width={1}
        flexGrow={0.49}
        justifyContent={"space-between"}
      >
        <OverviewPart
          elevation={3}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Stack alignItems={"center"} spacing={1}>
            <GiftCounter
              claimed={counts ? counts.claimed : 0}
              free={counts ? counts.free : 0}
            />
          </Stack>
        </OverviewPart>
        <OverviewPart elevation={3} />
      </Stack>
    </Box>
  );
};
