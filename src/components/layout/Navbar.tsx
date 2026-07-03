import { navigationItems } from "../../data/navigation";
import Container from "../common/Container";
import LinkButton from "../ui/LinkButton";
import ThemeSelector from "../ui/ThemeSelector";

const Navbar = () => {
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
            </div>
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default Navbar;
