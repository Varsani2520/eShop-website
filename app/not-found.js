"use client";
import Lottie from "lottie-react";
import notFound from "../app/lottie-animation/notFound.json";
export default function NotFound() {
  return (
    <div>
      <Lottie animationData={notFound} height={50} />
    </div>
  );
}
