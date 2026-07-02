import clsx from "clsx";
import { type AnchorHTMLAttributes } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "outline";
};

const Button = ({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <a
      className={clsx(
        "inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-300",
        {
          "bg-primary text-foreground hover:bg-primary-hover":
            variant === "primary",

          "border border-border hover:bg-card": variant === "outline",
        },
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
};

export default Button;
