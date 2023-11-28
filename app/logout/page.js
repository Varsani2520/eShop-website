"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { logoutuser } from "../action/action";

// need one button
const page = () => {
  const dispatch = useDispatch();
  async function logoutUser() {
    // direct toast
    dispatch(logoutuser());
    window.location.href("/");
  }
  return (
    <div style={{ marginTop: "100px" }}>
      <button onClick={() => logoutUser} sx={{ mt: 20 }}>
        logout
      </button>
    </div>
  );
};

export default page;
