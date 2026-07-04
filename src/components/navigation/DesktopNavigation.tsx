import { navigationItems } from "@/data/navigation";
import { scrollToSection } from "@/utils/scrollToSection";
import { motion } from "motion/react";
import NavigationLink from "./NavigationLink";

const DesktopNavigation = ({ activeSection }: { activeSection: string }) => {
  return (
    <ul className="hidden items-center gap-8 lg:flex">
      {navigationItems.map((item) => (
        <li key={item.href}>
          <motion.div layout>
            <NavigationLink
              targetId={item.label.toLocaleLowerCase()}
              label={item.label}
              activeSection={activeSection}
              animated
              className="text-sm font-medium"
              onNavigate={(id) => scrollToSection(id)}
            />
          </motion.div>
        </li>
      ))}
    </ul>
  );
};
export default DesktopNavigation;
