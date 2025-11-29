import React, { useState, useEffect } from "react";
import { Menu, X, ChefHat } from "lucide-react";
import { NAV_ITEMS } from "../constants";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-stone-100 py-3" 
            : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          {/* Brand Logo - Warm & Tech Mix */}
          <a href="#" onClick={scrollToTop} className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-techBlue flex items-center justify-center text-white shadow-lg shadow-stone-200 transition-transform group-hover:scale-105">
               <ChefHat size={20} />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-base font-bold text-techBlue tracking-tight">Чётко.<span className="text-primary">Вкусно</span></span>
              <span className="text-[10px] font-mono font-medium text-textMuted uppercase tracking-wider">FoodTech OS</span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-4 py-2 text-sm font-medium text-textMuted hover:text-primary hover:bg-orange-50 rounded-lg transition-all"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="ml-4 px-5 py-2.5 rounded-xl bg-techBlue text-white text-sm font-semibold hover:bg-primary shadow-lg shadow-stone-200 transition-all active:scale-95"
            >
              Стать партнером
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-techBlue hover:bg-stone-100 rounded-lg active:scale-95 transition-all"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden flex flex-col pt-24 px-6`}
      >
        <div className="flex flex-col space-y-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center justify-between p-4 rounded-xl text-xl font-bold text-techBlue active:bg-stone-50 transition-colors"
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
          <div className="h-px bg-stone-100 my-6" />
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="w-full bg-primary text-white py-4 rounded-xl font-bold text-center text-lg shadow-warm active:scale-[0.98] transition-transform"
          >
            Обсудить условия
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;