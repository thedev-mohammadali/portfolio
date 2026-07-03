import { Menu } from "lucide-react";

import { navigationItems } from "../../data/navigation";
import LinkButton from "../ui/LinkButton";
import Button from "../ui/MyButton";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import NavigationLink from "./NavigationLink";

const MobileNavigation = ({ activeSection }: { activeSection: string }) => {
  return (
    <Sheet>
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
        <SheetTitle className="mb-8 text-left text-xl font-bold">
          {"</>"} Ali
        </SheetTitle>

        <nav aria-label="Mobile navigation">
          <ul className="space-y-2">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <SheetClose asChild>
                  <NavigationLink
                    href={item.href}
                    label={item.label}
                    activeSection={activeSection}
                    className="hover:bg-card block rounded-lg px-4 py-3 text-base font-medium"
                  />
                </SheetClose>
              </li>
            ))}
          </ul>

          <div className="mt-8 border-t pt-6">
            <SheetClose asChild>
              <LinkButton
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                Resume
              </LinkButton>
            </SheetClose>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
