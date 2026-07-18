import { tv } from "tailwind-variants";

export const toggle = tv({
  base: [
    "inline-flex items-center justify-center gap-2 rounded-md font-medium whitespace-nowrap",
    "disabled:pointer-events-none disabled:opacity-50",
    "data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
    "focus-visible:border-outline focus-visible:ring-outline/50 focus-visible:ring-3",
    "transition-colors outline-none",
    "aria-invalid:ring-error/40 aria-invalid:border-error",
  ],
  defaultVariants: {
    size: "md",
    variant: "default",
  },
  variants: {
    size: {
      lg: "h-12 min-w-12 px-3 text-lg",
      md: "h-11 min-w-11 px-2.5 text-base",
      sm: "h-9 min-w-9 px-2 text-sm",
    },
    variant: {
      default: "hover:bg-muted hover:text-muted-foreground bg-transparent",
      outline:
        "border-input hover:bg-accent hover:text-accent-foreground border bg-transparent shadow-xs",
    },
  },
});
