import ProfileLayout from "@/app/components/ProfileLayout";
import React from "react";

const layout = ({children}) => {
  return <div><ProfileLayout/>{children}</div>;
};

export default layout;
