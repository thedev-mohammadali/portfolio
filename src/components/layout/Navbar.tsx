import { navigationItems } from "../../data/navigation";
import Container from "../common/Container";

const Navbar = () => {
  return (
    <header className="w-full border-b border-white/10">
      <Container>
        <nav className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="#home" className="text-2xl font-bold tracking-tight">
            {"</>"} Ali
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-8 lg:flex">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm font-medium transition-colors hover:text-blue-400"
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
              className="rounded-lg border border-white/10 p-2 transition hover:bg-white/5"
              aria-label="Toggle theme"
            >
              🌙
            </button>

            <a
              href="/resume.pdf"
              className="hidden rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium transition hover:bg-blue-500 md:inline-flex"
            >
              Resume
            </a>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
