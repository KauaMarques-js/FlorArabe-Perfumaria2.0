import Link from "next/link";
import MobileMenuToggle from "./MobileMenuToggle";
import ThemeToggle from "./ThemeToggle";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Produtos", href: "/produtos" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50 transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto px-6 py-4 flex items-center justify-between relative">
        {/* Mobile Theme Toggle */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 md:hidden z-10">
          <ThemeToggle />
        </div>
        {/* Logo */}
        <Link href="/" className="flex flex-col items-center mx-auto md:mx-0">
          <span className="font-heading text-2xl tracking-wide text-text-primary leading-none">
            FLOR ÁRABE
          </span>
          <span className="text-[10px] tracking-[0.35em] uppercase text-text-secondary mt-0.5">
            Perfumaria
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block" aria-label="Navegação principal">
          <ul className="flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-xs tracking-[0.2em] uppercase text-text-secondary hover:text-gold transition-colors duration-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="flex items-center">
              <ThemeToggle />
            </li>
          </ul>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <MobileMenuToggle />
        </div>
      </div>
    </header>
  );
}
