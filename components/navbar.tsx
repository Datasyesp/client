"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react"; // You can use any icon library for the hamburger and close icon

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo on the left */}
        <Link href="/" className="font-bold text-xl">
          Learntech
        </Link>

        {/* Navigation links for larger screens */}
        <nav className="hidden sm:flex gap-4 sm:gap-6">
          <Link href="/" className="text-sm font-medium hover:text-primary">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary">
            About
          </Link>
          <Link href="/colleges" className="text-sm font-medium hover:text-primary">
            Colleges & Careers
          </Link>
        </nav>

        {/* Contact button on the right */}
        <Button variant="default" size="sm" asChild>
          <Link href="/contact">Contact Us</Link>
        </Button>

        {/* Hamburger menu for small screens */}
        <div className="sm:hidden flex items-center">
          <button
            className="text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="sm:hidden bg-background/80 absolute top-16 left-0 w-full p-4">
          <nav className="flex flex-col gap-4">
            <Link href="/" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="/colleges" className="text-sm font-medium hover:text-primary">
              Colleges & Careers
            </Link>
            <Button variant="default" size="sm" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
