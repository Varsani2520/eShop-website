"use client";

import SignUp from "@/app/components/SignUp";
import Toast from "@/app/components/Toast";

export const metadata = {
  title: "Signup",
  openGraph: {
    title: "Signup",
  },
};
export default function SignUpPage() {
  return (
    <>
      <Toast />
      <SignUp />
    </>
  );
}
