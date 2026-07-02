export const buttonBaseClasses =
  "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-300";

export const buttonVariants = {
  primary: "bg-primary text-foreground hover:bg-primary-hover",

  outline: "border border-border bg-transparent text-foreground hover:bg-card",

  ghost: "bg-transparent text-foreground hover:bg-card",
} as const;

export type ButtonVariant = keyof typeof buttonVariants;
