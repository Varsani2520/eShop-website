'use client'
import ClipLoader from "react-spinners/ClipLoader";
import React from "react";
import { css } from "@emotion/react";
import { Box } from "@mui/material";

// Optional: Custom CSS for the spinner
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export default function Loading() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <ClipLoader color={"#123abc"} loading={true} css={override} size={50} />
    </Box>
  );
}
