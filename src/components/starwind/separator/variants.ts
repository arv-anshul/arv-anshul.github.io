import { tv } from "tailwind-variants";

export const separator = tv({
  base: "bg-border shrink-0",
  defaultVariants: {
    orientation: "horizontal",
  },
  variants: {
    orientation: {
      horizontal: "h-[1px] w-full",
      vertical: "h-full w-[1px]",
    },
  },
});
