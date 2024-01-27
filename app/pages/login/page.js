import React from "react";

import LoginPage from "../../components/LoginPage";
export const metadata = {
  title: "login",
  openGraph: {
    title: "login",
  },
};
export default function page() {
  return (
    <div>
      <LoginPage />
    </div>
  );
}
