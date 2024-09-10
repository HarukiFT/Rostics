import { Paper, styled } from "@mui/material";
import { Link } from "react-router-dom";

export const HeaderPaper = styled(Paper)(({ theme }) => ({
  paddingTop: 8,
  paddingBottom: 8,
}));

export const HeaderLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: theme.typography.h6.fontSize,
}));
