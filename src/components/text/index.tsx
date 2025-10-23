import React from "react";
import type { ReactNode, ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export type TextProps<T extends React.ElementType = "p"> = {
  children: ReactNode;
  // boolean shortcuts for common responsive variants
  titleLg?: boolean;
  titleMd?: boolean;
  titleSm?: boolean;
  textLg?: boolean;
  textBase?: boolean;
  caption?: boolean;

  // styling helpers
  primaryColor?: boolean;
  secondaryColor?: boolean;
  accentColor?: boolean;
  align?: "left" | "center" | "right" | "justify";
  weight?: "normal" | "medium" | "semibold" | "bold";

  // render as different element
  as?: T;
} & ComponentPropsWithoutRef<T>;

export default function Text<T extends React.ElementType = "p">({
  children,
  className,
  // variants
  titleLg,
  titleMd,
  titleSm,
  textLg,
  textBase,
  caption,
  // style helpers
  primaryColor,
  secondaryColor,
  accentColor,
  align,
  weight,
  // element
  as,
  ...props
}: TextProps<T>) {

  // variant class map
  const variants: string[] = [];
  if (titleLg) {
    variants.push("text-3xl sm:text-4xl md:text-5xl lg:text-7xl")
  } else if (titleMd) {
    variants.push("text-xl sm:text-2xl md:text-3xl lg:text-4xl", "font-semibold")
  } else if (titleSm) {
    variants.push("text-lg sm:text-xl md:text-2xl", "font-semibold")
  } else if (textLg) {
    variants.push("text-xl sm:text-xl md:text-2xl lg:text-3xl")
  } else if (textBase) {
    variants.push("text-base")
  } else {
    variants.push("text-xs")
  }

  // weight
  const weightClass =
    weight === "medium"
      ? "font-medium"
      : weight === "semibold"
      ? "font-semibold"
      : weight === "bold"
      ? "font-bold"
      : "font-normal";

  // alignment
  const alignClass =
   align === "center" 
   ? "text-center" 
   : align === "right"
   ? "text-right" 
   : align === "left" 
   ? "text-left" 
   : align === "justify" 
   ? "text-justify" 
   : ""
  
  const textColor = 
    primaryColor 
    ? "text-primary"
    : secondaryColor
    ? "text-secondary"
    : accentColor 
    ? "text-card/80"
    : "text-card"

  const classes = twMerge( ...variants, weightClass, alignClass, textColor, className ?? "");

  const style = { ...(props as any).style } as React.CSSProperties;

  const Text = (as || "p") as React.ElementType;

  return (
    <Text {...(props as ComponentPropsWithoutRef<any>)} className={classes} style={style}>
      {children}
    </Text>
  );
}
