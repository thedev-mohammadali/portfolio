import { navigationItems } from "@/data/navigation";

const DesktopNavigation = () => {
  return (
    <ul className="hidden items-center gap-8 lg:flex">
      {navigationItems.map((item) => (
        <li key={item.href}>
          <a
            href={item.href}
            className="text-foreground hover:text-primary text-sm font-medium transition-colors duration-300"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
};
export default DesktopNavigation;
