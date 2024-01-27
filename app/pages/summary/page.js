import CheckSummary from "@/app/components/CheckSummary";
import React from "react";
export const metadata = {
  title: "Summary",
  openGraph: {
    title: "Summary",
  },
};
export default function page() {
  return (
    <div sx={{ mt: "10%" }}>
      <CheckSummary />
    </div>
  );
}
