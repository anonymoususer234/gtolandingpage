import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Zap } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Zap className="h-8 w-8 text-[#39FF14]" />
            <span className="ml-2 text-2xl font-bold text-white">PokerNow<span className="text-[#39FF14]">Copilot</span></span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#how-it-works">How It Works</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
            <button className="px-6 py-2 rounded-full bg-[#39FF14] text-black font-bold hover:bg-[#39FF14]/80 transition-colors shadow-[0_0_15px_rgba(57,255,20,0.5)]">
              Get Extension
            </button>
          </nav>
          
          {/* Mobile Navigation Toggle */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden absolute w-full bg-black/95 backdrop-blur-md transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 py-4 shadow-lg' : 'max-h-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <MobileNavLink href="#features" onClick={() => setIsMenuOpen(false)}>Features</MobileNavLink>
          <MobileNavLink href="#how-it-works" onClick={() => setIsMenuOpen(false)}>How It Works</MobileNavLink>
          <MobileNavLink href="#faq" onClick={() => setIsMenuOpen(false)}>FAQ</MobileNavLink>
          <button 
            className="w-full py-3 rounded-full bg-[#39FF14] text-black font-bold hover:bg-[#39FF14]/80 transition-colors shadow-[0_0_15px_rgba(57,255,20,0.5)]"
            onClick={() => setIsMenuOpen(false)}
          >
            Get Extension
          </button>
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href} 
    className="text-white hover:text-[#39FF14] transition-colors font-medium"
  >
    {children}
  </a>
);

const MobileNavLink = ({ 
  href, 
  onClick, 
  children 
}: { 
  href: string; 
  onClick: () => void; 
  children: React.ReactNode 
}) => (
  <a 
    href={href} 
    className="flex items-center justify-between text-white hover:text-[#39FF14] transition-colors py-2 border-b border-gray-800"
    onClick={onClick}
  >
    <span>{children}</span>
    <ChevronRight className="h-5 w-5" />
  </a>
);

export default Header;