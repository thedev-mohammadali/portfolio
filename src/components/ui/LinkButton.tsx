import type { AnchorHTMLAttributes } from "react";

import {
  buttonClasses,
  type ButtonSize,
  type ButtonVariant,
} from "@/utils/button";

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

const LinkButton = ({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: LinkButtonProps) => {
  return (
    <a className={buttonClasses(variant, size, className)} {...props}>
      {children}
    </a>
  );
};

export default LinkButton;
