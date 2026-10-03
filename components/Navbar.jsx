'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { nav, site } from '@/lib/content';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'var(--color-cream)' : 'transparent',
        boxShadow: scrolled ? '0 1px 20px rgba(0,0,0,0.06)' : 'none',
      }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
          <span
            className="font-serif text-xl tracking-tight sm:text-2xl"
            style={{ color: 'var(--color-primary)' }}
          >
            Dr. Maya Reynolds
          </span>
          <span
            className="hidden text-xs sm:inline"
            style={{ color: 'var(--color-ink-light)' }}
          >
            PsyD
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="relative text-sm font-medium transition-colors duration-200 hover:opacity-70"
                style={{ color: 'var(--color-ink)' }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 hover:opacity-90 md:inline-block"
          style={{
            backgroundColor: 'var(--color-accent)',
            color: '#fff',
          }}
        >
          Book a Consultation
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X size={24} style={{ color: 'var(--color-ink)' }} />
          ) : (
            <Menu size={24} style={{ color: 'var(--color-ink)' }} />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="fixed inset-0 top-0 z-40 md:hidden"
          style={{ backgroundColor: 'var(--color-cream)' }}
        >
          <div className="flex items-center justify-between px-6 py-4">
            <span
              className="font-serif text-xl"
              style={{ color: 'var(--color-primary)' }}
            >
              Dr. Maya Reynolds, PsyD
            </span>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} style={{ color: 'var(--color-ink)' }} />
            </button>
          </div>
          <nav className="mt-8 flex flex-col items-center gap-6 px-6">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="font-serif text-2xl transition-opacity hover:opacity-70"
                style={{ color: 'var(--color-ink)' }}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 rounded-full px-8 py-3 text-base font-medium"
              style={{
                backgroundColor: 'var(--color-accent)',
                color: '#fff',
              }}
            >
              Book a Consultation
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
