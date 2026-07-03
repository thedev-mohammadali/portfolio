import { navigationSectionIds } from "@/data/navigation";
import useActiveSection from "@/hooks/useActiveSection";
import Container from "../common/Container";
import DesktopNavigation from "../navigation/DesktopNavigation";
import MobileNavigation from "../navigation/MobileNavigation";
import LinkButton from "../ui/LinkButton";
import ThemeSelector from "../ui/ThemeSelector";

const Navbar = () => {
  const activeSection = useActiveSection(navigationSectionIds);
  console.log(activeSection);
  return (
    <header className="border-border bg-background/80 sticky top-0 z-50 border-b backdrop-blur-md">
      <nav aria-label="Primary navigation">
        <Container>
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              className="text-foreground hover:text-primary text-2xl font-bold tracking-tight transition-colors duration-300"
            >
              {"</>"} Ali
            </a>

            {/* Desktop Navigation */}
            <DesktopNavigation />

            {/* Right Section */}
            <div className="flex items-center gap-3">
              <ThemeSelector />

              <LinkButton
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </LinkButton>

              {/* Mobile menu goes here */}
              <MobileNavigation />
            </div>
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default Navbar;
