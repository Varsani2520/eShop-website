"use client"
import CheckAddress from "@/app/components/CheckAddress";
import { useTheme } from "@mui/material";
import React from "react";

export default function page() {
  const theme = useTheme()
  return (
    <div sx={{ background: theme.palette.primary.main }}>
      <CheckAddress />
    </div>
  );
}
