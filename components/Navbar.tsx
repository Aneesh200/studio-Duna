"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({
  href,
  children,
  active,
  mobile,
}: {
  href: string;
  children: React.ReactNode;
  active?: boolean;
  mobile?: boolean;
}) => (
  <Link
    href={href}
    className={`transition-colors duration-300 relative group ${
      active ? "text-primary" : "hover:text-primary"
    } ${mobile ? "block py-4 text-base" : ""}`}
  >
    {children}
    <span
      className={`absolute -bottom-2 left-0 h-[1px] bg-current transition-all duration-300 ${
        active ? "w-full" : "w-0 group-hover:w-full"
      } ${mobile ? "-bottom-1" : ""}`}
    />
  </Link>
);

const NAV_LINKS = [
  { href: "/", label: "Projects" },
  { href: "/studio", label: "Studio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.1);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <>
      <nav
        className={`fixed w-full z-50 top-0 left-0 px-6 md:px-16 flex justify-between items-center transition-all duration-700 bg-eggshell/95 backdrop-blur-md text-text-main shadow-sm border-b border-black/5 ${
          scrolled || menuOpen ? "py-4" : "py-6 md:py-8"
        }`}
      >
        <div className="hidden md:flex space-x-16 text-xs tracking-[0.2em] uppercase font-medium">
          {NAV_LINKS.slice(0, 3).map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              active={pathname === link.href}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
        <Link href="/" className="absolute left-1/2 transform -translate-x-1/2">
          <h1 className="font-display text-3xl md:text-4xl tracking-[0.15em] uppercase font-normal">
            Duna
          </h1>
        </Link>
        <div className="flex items-center space-x-6 md:space-x-8">
          <span className="hidden md:block">
            <NavLink href="/contact" active={pathname === "/contact"}>
              Contact
            </NavLink>
          </span>
          <button
            className="md:hidden p-3 -m-2 focus:outline-none touch-manipulation"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span className="relative block w-6 h-4">
              <span
                className={`absolute left-0 block w-6 h-[1px] bg-current transition-all duration-300 ${
                  menuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 block w-6 h-[1px] bg-current transition-all duration-300 ${
                  menuOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "top-[6px]"
                }`}
              />
            </span>
          </button>
          <button
            className="hidden md:block focus:outline-none group"
            type="button"
            aria-label="Menu"
          >
            <span className="block w-8 h-[1px] bg-current mb-1.5 transition-all group-hover:w-6 ml-auto" />
            <span className="block w-8 h-[1px] bg-current transition-all group-hover:w-4 ml-auto" />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <div
          className="absolute inset-0 bg-black/20"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-full max-w-sm bg-eggshell shadow-xl pt-24 px-8 pb-8 transition-transform duration-300 ease-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="flex flex-col text-text-main">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                active={pathname === link.href}
                mobile
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
