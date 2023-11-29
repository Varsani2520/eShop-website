"use client";
import Lottie from "lottie-react";
import React from "react";
import emptyProfile from "../lottie-animation/emptyProfile";
const page = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
      <Lottie animationData={emptyProfile} height={'50%'}/>
    </div>
  );
};

export default page;
