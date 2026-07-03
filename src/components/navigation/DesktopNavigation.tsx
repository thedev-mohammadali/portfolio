import { navigationItems } from "@/data/navigation";
import { motion } from "motion/react";
import NavigationLink from "./NavigationLink";

const DesktopNavigation = ({ activeSection }: { activeSection: string }) => {
  return (
    <ul className="hidden items-center gap-8 lg:flex">
      {navigationItems.map((item) => (
        <li key={item.href}>
          <motion.div layout>
            <NavigationLink
              href={item.href}
              label={item.label}
              activeSection={activeSection}
              animated
              className="text-sm font-medium"
            />
          </motion.div>
        </li>
      ))}
    </ul>
  );
};
export default DesktopNavigation;
