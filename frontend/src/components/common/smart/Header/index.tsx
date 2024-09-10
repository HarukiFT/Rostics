import {
  Breakpoint,
  Container,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { HeaderLink, HeaderPaper } from "./styled";
import { Link } from "react-router-dom";
import { headerConstants } from "../../../../core/constants";
import { Hero } from "../../simple/Hero";

export interface Props {
  maxWidth: Breakpoint;
}

export const Header: React.FC<Props> = ({ maxWidth }) => {
  return (
    <Container maxWidth={maxWidth}>
      <HeaderPaper
        sx={{
          width: 1,
          px: 2,
        }}
        elevation={3}
      >
        <Stack direction={"row"} spacing={2}>
          <Hero />

          <Divider flexItem orientation="vertical" />

          {Object.entries(headerConstants.Links).map((link) => (
            <HeaderLink to={link[1]}>{link[0]}</HeaderLink>
          ))}
        </Stack>
      </HeaderPaper>
    </Container>
  );
};
