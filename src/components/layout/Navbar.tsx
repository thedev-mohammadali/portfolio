import { navigationItems } from "../../data/navigation";
import Container from "../common/Container";
import LinkButton from "../ui/LinkButton";
import ThemeSelector from "../ui/ThemeSelector";

const Navbar = () => {
  return (
    <header className="border-border bg-background w-full border-b">
      <Container>
        <nav className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="text-foreground text-2xl font-bold tracking-tight"
          >
            {"</>"} Ali
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-8 lg:flex">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-foreground hover:text-primary text-sm font-medium transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle Placeholder */}
            <ThemeSelector />
            <LinkButton href="/resume.pdf">Resume</LinkButton>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
