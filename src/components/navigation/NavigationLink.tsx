import clsx from "clsx";
import { motion } from "motion/react";

type NavigationLinkProps = {
  href: string;
  label: string;
  activeSection: string;
  className?: string;
  onClick?: () => void;
  animated?: boolean;
};

const NavigationLink = ({
  href,
  label,
  activeSection,
  className,
  onClick,
  animated = false,
}: NavigationLinkProps) => {
  const isActive = activeSection === href.slice(1);

  return (
    <a
      href={href}
      onClick={onClick}
      className={clsx(
        "relative inline-flex items-center py-2 transition-colors duration-300",
        isActive
          ? "text-foreground"
          : "text-muted-foreground hover:text-foreground",
        className,
      )}
    >
      {label}

      {animated && isActive && (
        <motion.span
          layoutId="desktop-active-nav"
          className="bg-primary absolute inset-x-0 -bottom-1 h-0.5 rounded-full"
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 35,
          }}
        />
      )}
    </a>
  );
};

export default NavigationLink;
