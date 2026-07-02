import clsx from "clsx";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import {
  buttonBaseClasses,
  buttonVariants,
  type ButtonVariant,
} from "../../utils/button";

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

const LinkButton = ({
  children,
  className,
  variant = "primary",
  ...props
}: LinkButtonProps) => {
  return (
    <a
      className={clsx(buttonBaseClasses, buttonVariants[variant], className)}
      {...props}
    >
      {children}
    </a>
  );
};

export default LinkButton;
