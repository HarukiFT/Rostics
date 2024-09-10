import { Typography } from "@mui/material";
import { Fragment } from "react";
import { ClaimSpan, FreeSpan } from "./styled";

export interface Props {
  free: number;
  claimed: number;
}

export const GiftCounter: React.FC<Props> = ({ free, claimed }) => {
  return (
    <Fragment>
      <Typography variant="h4">
        Свободно: <FreeSpan>{free}</FreeSpan>
      </Typography>
      <Typography variant="h4">
        Занято: <ClaimSpan>{claimed}</ClaimSpan>
      </Typography>
      <Typography variant="h4">Всего: {claimed + free}</Typography>
    </Fragment>
  );
};
