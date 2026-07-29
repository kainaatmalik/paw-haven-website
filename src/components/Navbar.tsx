import React, { useState, useEffect } from 'react';
import { Heart, Menu, X, PawPrint, Sparkles, PhoneCall } from 'lucide-react';

interface NavbarProps {
  favoriteCount: number;
  onOpenFavorites: () => void;
  onNavigateToAdopt: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  favoriteCount,
  onOpenFavorites,
  onNavigateToAdopt,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Adopt', href: '#adopt' },
    { name: 'Pet Spotlight', href: '#spotlight' },
    { name: 'Success Stories', href: '#stories' },
    { name: 'How It Works', href: '#journey' },
    { name: 'About', href: '#why-us' },
    { name: 'Donate', href: '#donate' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F4]/85 backdrop-blur-md shadow-sm border-b border-[#E7E5E4]/80 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, '#hero')}
          className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E7D4E] rounded-lg p-1"
          aria-label="Paw Haven Home"
        >
          <div className="w-9 h-9 rounded-full bg-[#2E7D4E] flex items-center justify-center text-white shadow-md shadow-[#2E7D4E]/20 transition-transform duration-300 group-hover:scale-105">
            <PawPrint className="w-4 h-4 fill-current" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl text-[#2F3437] tracking-tight group-hover:text-[#2E7D4E] transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Paw Haven
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-sm font-medium text-[#2F3437]/80 hover:text-[#2E7D4E] transition-colors relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E7D4E] rounded"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Favorite Button */}
          <button
            onClick={onOpenFavorites}
            className="relative p-2.5 rounded-full text-[#2F3437] hover:bg-[#2E7D4E]/10 hover:text-[#2E7D4E] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E7D4E]"
            title="Saved Pets"
            aria-label={`Saved pets (${favoriteCount})`}
          >
            <Heart className={`w-5 h-5 ${favoriteCount > 0 ? 'fill-[#E76F51] text-[#E76F51]' : ''}`} />
            {favoriteCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-[#E76F51] text-white text-[11px] font-bold rounded-full flex items-center justify-center animate-pulse">
                {favoriteCount}
              </span>
            )}
          </button>

          {/* Primary CTA */}
          <button
            onClick={onNavigateToAdopt}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#2E7D4E] text-white font-semibold text-sm shadow-sm hover:bg-[#1F6B3E] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E7D4E] cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#F59E0B]" />
            <span>Find a Companion</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenFavorites}
            className="relative p-2 rounded-full text-[#2F3437] focus:outline-none"
            aria-label="Saved Pets"
          >
            <Heart className={`w-5 h-5 ${favoriteCount > 0 ? 'fill-[#E76F51] text-[#E76F51]' : ''}`} />
            {favoriteCount > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 bg-[#E76F51] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {favoriteCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-[#2F3437] hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E7D4E]"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F4] border-b border-[#E7E5E4] px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
          <div className="flex flex-col gap-3 max-w-[1200px] mx-auto">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-3 py-2 rounded-xl text-base font-medium text-[#2F3437] hover:bg-[#2E7D4E]/10 hover:text-[#2E7D4E] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-[#E7E5E4] flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigateToAdopt();
                }}
                className="w-full py-3 rounded-2xl bg-[#2E7D4E] text-white font-medium text-center shadow-md hover:bg-[#1F6B3E] transition-colors flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#F59E0B]" />
                <span>Find Your Companion</span>
              </button>
              <a
                href="tel:18005557297"
                className="w-full py-2.5 rounded-2xl border border-[#E7E5E4] bg-white text-[#2F3437] font-medium text-sm text-center flex items-center justify-center gap-2 hover:bg-gray-50"
              >
                <PhoneCall className="w-4 h-4 text-[#2E7D4E]" />
                <span>24/7 Rescue Line: (800) 555-PAWS</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
