import CheckOut from "@/app/components/CheckOut";
import React from "react";
export const metadata = {
  title: "checkout",
  openGraph: {
    title: "checkout",
  },
};
export default function page() {
  return (
    <div>
      <CheckOut />
    </div>
  );
}
