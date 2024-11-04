"use client";
import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import toast, { Toaster } from "react-hot-toast";
import "remixicon/fonts/remixicon.css";

export const NextUILib = ({
  children,
}: {
  children: React.ReactNode | React.ReactElement;
}) => {
  return (
    <NextUIProvider>
      <Toaster position="top-center" reverseOrder={false} />
      {children}
    </NextUIProvider>
  );
};
