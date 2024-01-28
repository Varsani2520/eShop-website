"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container/Container";
const Root = styled("div")(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  "& > :not(style) ~ :not(style)": {
    marginTop: theme.spacing(2),
  },
}));

export default function Divider1() {
  return (
    <Container>
      <Root style={{ color: "#1976d2" }}>
        <Divider>
          <h1>Top categories to Choose From</h1>
        </Divider>
      </Root>
    </Container>
  );
}
