"use client";

import { Button as MuiButton, ButtonProps as MuiButtonProps } from "@mui/material";
import { ReactNode } from "react";

interface ButtonProps extends Omit<MuiButtonProps, "children"> {
  children: ReactNode;
  fullWidthOnMobile?: boolean;
}

export default function Button({
  children,
  variant = "contained",
  size = "large",
  fullWidthOnMobile = false,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <MuiButton
      variant={variant}
      size={size}
      className={`${fullWidthOnMobile ? "w-full sm:w-auto" : ""} ${className}`}
      {...props}
    >
      {children}
    </MuiButton>
  );
}
