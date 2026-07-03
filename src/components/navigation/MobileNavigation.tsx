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

const MobileNavigation = () => {
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
                  <a
                    href={item.href}
                    className="hover:bg-card block rounded-lg px-4 py-3 text-base font-medium transition-colors"
                  >
                    {item.label}
                  </a>
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
