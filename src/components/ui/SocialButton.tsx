import clsx from "clsx";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type SocialButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  icon: ReactNode;
};

const SocialButton = ({ icon, className, ...props }: SocialButtonProps) => {
  return (
    <a
      className={clsx(
        "border-border bg-card hover:border-primary hover:text-primary flex h-14 w-14 items-center justify-center rounded-full border transition-all duration-300 hover:scale-105",
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
