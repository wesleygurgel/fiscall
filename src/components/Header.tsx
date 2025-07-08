import { Home, Info, Menu, X, Scale, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Function to handle smooth scrolling to sections
  const scrollToSection = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (sectionId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navItems = [
    { href: '/', label: 'Home', icon: <Home className="w-5 h-5" />, sectionId: 'top' },
    { href: '/#about', label: 'Quem Somos', icon: <Info className="w-5 h-5" />, sectionId: 'about' },
    { href: '/#solution', label: 'Nossa Solução', icon: <Scale className="w-5 h-5" />, sectionId: 'solution' },
    // { href: '/#testimonials', label: 'Depoimentos', icon: <BookOpen className="w-5 h-5" />, sectionId: 'testimonials' },
  ];

  return (
    <>
      {/* Header */}
      <header 
        className={`fixed w-full transition-all duration-300 z-50 ${
          scrolled 
            ? 'bg-white shadow-md py-2' 
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <a href="/" onClick={scrollToSection('top')} className="flex-shrink-0 flex items-center">
                <div className="flex items-center">
                  <Scale className={`w-8 h-8 ${scrolled ? 'text-primary-600' : 'text-gold-400'} mr-2`} />
                  <div className="flex flex-col">
                    <span className={`text-xl font-bold ${scrolled ? 'text-primary-600' : 'text-white'} font-serif tracking-tight`}>
                      Câmara e Melo
                    </span>
                    <span className={`text-xs ${scrolled ? 'text-gold-500' : 'text-gold-300'} font-medium font-sans tracking-wider`}>
                      Advogados Associados
                    </span>
                  </div>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={item.sectionId ? scrollToSection(item.sectionId) : undefined}
                  className={`flex items-center px-4 py-2 rounded-md text-sm font-medium font-sans transition-all duration-200 ${
                    scrolled 
                      ? 'text-gray-700 hover:bg-gray-100' 
                      : 'text-white hover:bg-white hover:bg-opacity-10'
                  }`}
                >
                  {item.icon}
                  <span className="ml-2">{item.label}</span>
                </a>
              ))}
              <a 
                href="/#contact" 
                onClick={scrollToSection('contact')}
                className={`ml-2 px-5 py-2.5 rounded-md text-sm font-medium transition-all duration-200 flex items-center ${
                  scrolled 
                    ? 'bg-primary-600 text-white hover:bg-primary-700' 
                    : 'bg-gold-500 text-white hover:bg-gold-600'
                }`}
              >
                <Shield className="w-4 h-4 mr-2" />
                Fale Conosco
              </a>
            </nav>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={toggleMenu}
                className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none ${
                  scrolled 
                    ? 'text-primary-600 hover:text-primary-700 hover:bg-primary-50' 
                    : 'text-white hover:bg-white hover:bg-opacity-10'
                }`}
                aria-label="Menu"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden bg-white shadow-lg border-t border-gray-200"
          >
            <div className="px-4 pt-3 pb-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center px-4 py-3 rounded-md text-base font-medium font-sans text-gray-700 hover:bg-gray-50"
                  onClick={(e) => {
                    if (item.sectionId) {
                      scrollToSection(item.sectionId)(e);
                    }
                    setIsMenuOpen(false);
                  }}
                >
                  {item.icon}
                  <span className="ml-3">{item.label}</span>
                </a>
              ))}
              <a 
                href="/#contact" 
                className="flex items-center justify-center px-4 py-3 rounded-md text-base font-medium bg-primary-600 text-white mt-2 font-sans hover:bg-primary-700 transition-colors"
                onClick={(e) => {
                  scrollToSection('contact')(e);
                  setIsMenuOpen(false);
                }}
              >
                <Shield className="w-5 h-5 mr-2" />
                Fale Conosco
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
