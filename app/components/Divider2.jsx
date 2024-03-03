"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container/Container";
import { useTheme } from "@mui/material";
const Root = styled("div")(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  "& > :not(style) ~ :not(style)": {
    marginTop: theme.spacing(2),
  },
}));

export default function Divider2() {
  const theme = useTheme()
  return (
    <Container>
      <Root style={{ color: theme.palette.background.headline }}>
        <Divider>
          <h1 >Our Top Categories</h1>
        </Divider>
      </Root>
    </Container>
  );
}
