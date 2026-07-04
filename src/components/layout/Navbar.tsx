import Logo from "@/assets/images/logo-dark.svg";
import { navigationSectionIds } from "@/data/navigation";
import useActiveSection from "@/hooks/useActiveSection";
import { scrollToSection } from "@/utils/scrollToSection";
import Container from "../common/Container";
import DesktopNavigation from "../navigation/DesktopNavigation";
import MobileNavigation from "../navigation/MobileNavigation";
import LinkButton from "../ui/LinkButton";
import ThemeSelector from "../ui/ThemeSelector";

const Navbar = () => {
  const activeSection = useActiveSection(navigationSectionIds);
  return (
    <header className="border-border bg-background/80 sticky top-0 z-50 border-b backdrop-blur-md">
      <nav aria-label="Primary navigation">
        <Container>
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary flex items-center text-2xl font-bold tracking-tight transition-colors duration-300"
            >
              <img
                src={Logo}
                alt="Ali logo"
                className="h-14 w-14 shrink-0 object-contain transition-transform hover:scale-105 sm:h-16 sm:w-16"
              />
            </button>

            {/* Desktop Navigation */}
            <DesktopNavigation activeSection={activeSection} />

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
              <MobileNavigation activeSection={activeSection} />
            </div>
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default Navbar;
