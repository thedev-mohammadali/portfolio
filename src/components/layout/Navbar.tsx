import { navigationItems } from "../../data/navigation";
import Container from "../common/Container";
import LinkButton from "../ui/LinkButton";

const Navbar = () => {
  return (
    <header className="w-full border-b border-border bg-background">
      <Container>
        <nav className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="text-2xl font-bold tracking-tight text-foreground"
          >
            {"</>"} Ali
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-8 lg:flex">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle Placeholder */}
            <button
              className="rounded-lg border border-border p-2 transition hover:bg-card"
              aria-label="Toggle theme"
            >
              🌙
            </button>

            <LinkButton href="/resume.pdf">Resume</LinkButton>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
