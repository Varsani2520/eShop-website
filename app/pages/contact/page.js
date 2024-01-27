import ContactPage from "@/app/components/ContactPage";
import React from "react";
export const metadata = {
  title: "contact",
  openGraph: {
    title: "contact",
  },
};
export default function page() {
  return (
    <div>
      <ContactPage />
    </div>
  );
}
