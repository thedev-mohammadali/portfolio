import Logo from "@/assets/images/logo-dark.svg";
import { scrollToSection } from "@/utils/scrollToSection";
import { Menu } from "lucide-react";
import { useState } from "react";
import { navigationItems } from "../../data/navigation";
import LinkButton from "../ui/LinkButton";
import Button from "../ui/MyButton";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import NavigationLink from "./NavigationLink";

const MobileNavigation = ({ activeSection }: { activeSection: string }) => {
  const [open, setOpen] = useState(false);

  const handleNavigate = (id: string) => {
    scrollToSection(id);
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          aria-label="Open navigation menu"
        >
          <Menu className="size-6" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-80">
        <SheetTitle className="my-8 pl-2 text-left text-xl font-bold">
          <img
            src={Logo}
            alt="Ali logo"
            className="h-14 w-14 shrink-0 object-contain transition-transform hover:scale-105 sm:h-16 sm:w-16"
          />
        </SheetTitle>

        <nav aria-label="Mobile navigation">
          <ul className="space-y-2">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <NavigationLink
                  targetId={item.label.toLocaleLowerCase()}
                  label={item.label}
                  activeSection={activeSection}
                  className="hover:bg-card block rounded-lg px-4 py-3 text-base font-medium"
                  onNavigate={handleNavigate}
                />
              </li>
            ))}
          </ul>

          <div className="mt-8 border-t pt-6">
            <LinkButton
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
              onClick={() => setOpen(false)}
            >
              Resume
            </LinkButton>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
