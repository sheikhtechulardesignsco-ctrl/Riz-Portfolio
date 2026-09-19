import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Menu, X, Mail } from 'lucide-react';

interface HeaderProps {
  onContactClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-stone-50/90 backdrop-blur-md border-b border-stone-200/80 shadow-xs py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand identity */}
        <a
          id="brand-logo-link"
          href="#"
          className="flex items-center gap-3 group focus:outline-hidden"
        >
          <div className="w-10 h-10 rounded-xl bg-stone-900 text-stone-100 flex items-center justify-center font-bold text-lg tracking-tight shadow-xs group-hover:bg-amber-600 transition-colors">
            RW
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg text-stone-900 tracking-tight">Riz Wan</span>
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Available
              </span>
            </div>
            <p className="text-xs text-stone-500 font-medium tracking-tight">Web Developer • Shopify, WordPress & Custom</p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden md:flex items-center gap-8">
          <a
            id="nav-link-work"
            href="#featured-work"
            className="text-sm font-medium text-stone-600 hover:text-stone-950 transition-colors"
          >
            Featured Work
          </a>
          <a
            id="nav-link-services"
            href="#services"
            className="text-sm font-medium text-stone-600 hover:text-stone-950 transition-colors"
          >
            Services
          </a>
          <a
            id="nav-link-expertise"
            href="#expertise"
            className="text-sm font-medium text-stone-600 hover:text-stone-950 transition-colors"
          >
            Tech Stack
          </a>
          <a
            id="nav-link-ethos"
            href="#why-riz"
            className="text-sm font-medium text-stone-600 hover:text-stone-950 transition-colors"
          >
            Why Me
          </a>
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            id="header-email-direct"
            href="mailto:sheikhtechulardesignsco@gmail.com"
            className="text-xs font-semibold text-stone-600 hover:text-stone-900 px-3 py-2 rounded-lg hover:bg-stone-200/50 transition-colors flex items-center gap-1.5"
            title="Email Riz Wan directly"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email</span>
          </a>
          <button
            id="header-hire-button"
            onClick={onContactClick}
            className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-900 text-stone-50 text-sm font-semibold hover:bg-stone-800 active:scale-98 transition-all shadow-xs"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-stone-700 hover:text-stone-900 hover:bg-stone-200/60 transition-colors focus:outline-hidden"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="md:hidden bg-stone-50 border-b border-stone-200 px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2"
        >
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-medium border border-emerald-200/60 mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Currently open for freelance & contract work</span>
          </div>
          <a
            href="#featured-work"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-stone-800 hover:bg-stone-200/60"
          >
            Featured Work
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-stone-800 hover:bg-stone-200/60"
          >
            Services & Solutions
          </a>
          <a
            href="#expertise"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-stone-800 hover:bg-stone-200/60"
          >
            Skills & Stack
          </a>
          <a
            href="#why-riz"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-stone-800 hover:bg-stone-200/60"
          >
            Work Ethos
          </a>
          <div className="pt-2 border-t border-stone-200 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onContactClick();
              }}
              className="w-full text-center px-4 py-2.5 rounded-xl bg-stone-900 text-stone-50 text-sm font-semibold hover:bg-stone-800"
            >
              Get in Touch / Request Quote
            </button>
            <a
              href="mailto:sheikhtechulardesignsco@gmail.com"
              className="w-full text-center px-4 py-2 rounded-xl border border-stone-300 text-stone-700 text-sm font-medium hover:bg-stone-100"
            >
              sheikhtechulardesignsco@gmail.com
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
