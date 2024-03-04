"use client";
import Lottie from "lottie-react";
import React from "react";
import emptyProfile from "../../lottie-animation/emptyProfile.json";
import { useTheme } from "@mui/material";
const page = () => {
  const theme = useTheme();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "60vh",
        background: theme.palette.background.body,
      }}
    >
      {/* <Lottie animationData={emptyProfile} height={'50%'}/> */}
    </div>
  );
};

export default page;
