import clsx from "clsx";
import { motion } from "motion/react";

type NavigationLinkProps = {
  targetId: string;
  label: string;
  activeSection: string;
  className?: string;
  onClick?: () => void;
  animated?: boolean;
  onNavigate?: (id: string) => void;
};

const NavigationLink = ({
  targetId,
  label,
  activeSection,
  className,
  onClick,
  animated = false,
  onNavigate,
}: NavigationLinkProps) => {
  const isActive = activeSection === targetId;

  const handleClick = () => {
    onNavigate?.(targetId);
    onClick?.();
  };

  return (
    <button
      onClick={handleClick}
      className={clsx(
        "relative inline-flex items-center py-2 transition-colors duration-300",
        isActive
          ? "text-foreground"
          : "text-muted-foreground hover:text-foreground",
        className,
      )}
      aria-current={isActive ? "page" : undefined}
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
    </button>
  );
};

export default NavigationLink;
