import { ComponentProps } from "react";
import { Box } from "../Layout";
import { VariantProps, cva } from "class-variance-authority";
export const Tabstyles = cva("w-full");

export interface Tab {
  label: string;
  content: React.ReactNode;
}

export interface TabsProps
  extends ComponentProps<typeof Box>,
    VariantProps<typeof Tabstyles> {
  tabs: Tab[];
  className?:string;
}
