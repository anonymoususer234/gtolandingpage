import React from 'react';
import { Zap, Github, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-[#39FF14]/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <Zap className="h-6 w-6 text-[#39FF14]" />
              <span className="ml-2 text-xl font-bold text-white">PokerNow<span className="text-[#39FF14]">Copilot</span></span>
            </div>
            <p className="text-gray-400 mb-6">
              AI-powered poker assistant for PokerNow players. Make optimal decisions with real-time GTO strategy recommendations.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<Github className="h-5 w-5" />} />
              <SocialLink href="#" icon={<Twitter className="h-5 w-5" />} />
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-white font-bold mb-4">Product</h3>
            <ul className="space-y-2">
              <FooterLink href="#features">Features</FooterLink>
              <FooterLink href="#how-it-works">How It Works</FooterLink>
              <FooterLink href="#faq">FAQ</FooterLink>
              <FooterLink href="#">Download</FooterLink>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-white font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <FooterLink href="#">Documentation</FooterLink>
              <FooterLink href="#">Poker Strategy</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
              <FooterLink href="#">Support</FooterLink>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-white font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <FooterLink href="#">Terms of Service</FooterLink>
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Cookie Policy</FooterLink>
              <FooterLink href="#">Disclaimer</FooterLink>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} PokerNow Copilot. All rights reserved.
          </p>
          <div className="flex items-center text-gray-500 text-sm">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-[#39FF14] mx-1" />
            <span>for poker players</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a 
    href={href} 
    className="w-10 h-10 rounded-full bg-[#39FF14]/10 flex items-center justify-center text-[#39FF14] hover:bg-[#39FF14]/20 transition-colors"
  >
    {icon}
  </a>
);

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <a 
      href={href} 
      className="text-gray-400 hover:text-[#39FF14] transition-colors"
    >
      {children}
    </a>
  </li>
);

export default Footer;