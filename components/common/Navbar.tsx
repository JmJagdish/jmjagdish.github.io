"use client";

import BrandLogo from "@/ui/BrandLogo";
import React, { useCallback, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "@/ui/Button";

const navLinks = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Skills",
    href: "/skills",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      {/* Navbar */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl bg-white/70 backdrop-blur-xl shadow-md rounded-full md:border md:border-primary/20 transition-all duration-300">
        <nav className="mx-auto px-6 py-3.5 md:px-12 lg:px-20">
          {/* Desktop */}
          <div className="hidden md:grid grid-cols-3 items-center">
            <Link href="/" className="justify-self-start">
              <BrandLogo />
            </Link>

            <div className="flex justify-center gap-10 text-primary text-lg tracking-wide">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition hover:opacity-70"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="justify-self-end">
              <Link href="/resume/resume.pdf" target="_blank">
                <Button>Resume</Button>
              </Link>
            </div>
          </div>

          {/* Mobile */}
          <div className="flex md:hidden items-center justify-between">
            <BrandLogo />

            <button
              onClick={toggleMenu}
              className="relative z-100 text-primary"
            >
              {isOpen ? <X size={34} /> : <Menu size={34} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Full Screen Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white/90 backdrop-blur-xl md:hidden transition-all duration-500
        ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="h-full flex flex-col items-center justify-center gap-10 text-xl text-primary">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={closeMenu}>
              {link.name}
            </Link>
          ))}

          <Link
            href="/resume/resume.pdf"
            target="_blank"
            onClick={closeMenu}
            className="rounded-full border-2 border-primary px-7 py-2"
          >
            Resume
          </Link>
        </div>
      </div>
    </>
  );
};

export default React.memo(Navbar);
