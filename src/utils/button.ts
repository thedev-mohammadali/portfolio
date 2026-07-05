import clsx from "clsx";

export const buttonBaseClasses =
  "inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export const buttonVariants = {
  primary:
    "bg-primary text-white shadow-sm hover:bg-primary-hover hover:shadow-lg",

  outline:
    "border border-border bg-transparent text-foreground shadow-sm hover:border-primary hover:bg-primary hover:text-white hover:shadow-lg",

  ghost: "bg-transparent text-foreground hover:bg-card hover:shadow-md",
} as const;

export const buttonSizes = {
  sm: "px-4 py-2 text-sm",

  md: "px-5 py-2.5",

  lg: "px-6 py-3 text-base",

  icon: "h-10 w-10 p-0",
} as const;

export type ButtonVariant = keyof typeof buttonVariants;
export type ButtonSize = keyof typeof buttonSizes;

export const buttonClasses = (
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md",
  className?: string,
) =>
  clsx(
    buttonBaseClasses,
    buttonVariants[variant],
    buttonSizes[size],
    className,
  );
