import CheckAddress from "@/app/components/CheckAddress";
import React from "react";
export const metadata = {
  title: "Address",
  openGraph: {
    title: "Address",
  },
};
export default function page() {
  return (
    <div sx={{ mt: "10%" }}>
      <CheckAddress />
    </div>
  );
}
