export const navigationItems = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Education",
    href: "#education",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Contact",
    href: "#contact",
  },
] as const;

export const navigationSectionIds = navigationItems.map((item) =>
  item.href.slice(1),
);
