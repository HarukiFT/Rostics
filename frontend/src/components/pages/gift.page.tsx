import { Grid2 } from "@mui/material";
import { GiftTable } from "../containers/GiftTable";
import { GiftOverview } from "../containers/GiftOverview";

export const GiftPage: React.FC = () => {
  return (
    <Grid2 container display={"flex"} justifyContent={"space-around"}>
      <Grid2 size={7}>
        <GiftTable />
      </Grid2>
      <Grid2 size={4.5}>
        <GiftOverview />
      </Grid2>
    </Grid2>
  );
};
