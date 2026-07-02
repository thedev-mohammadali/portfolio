import clsx from "clsx";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type SocialButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  icon: ReactNode;
};

const SocialButton = ({ icon, className, ...props }: SocialButtonProps) => {
  return (
    <a
      className={clsx(
        "flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary",
        className,
      )}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {icon}
    </a>
  );
};

export default SocialButton;
