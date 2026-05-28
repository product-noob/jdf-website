import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  const navLinks = [
    { name: t.nav.home, href: '/#' },
    { name: t.nav.pastYatras, href: '/past-yatras' },
    { name: t.nav.seva, href: '/#seva' },
    { name: t.nav.team, href: '/team' },
  ];

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-300 bg-paper-warm/95 backdrop-blur-md border-b border-line shadow-sm"
    >
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-serif font-bold text-xl">
            <img
              src={`${import.meta.env.BASE_URL}images/JDF_Logo.png`}
              alt="JDF Logo"
              width={40}
              height={40}
              decoding="async"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="font-serif font-semibold text-xl text-charcoal tracking-tight hidden sm:block">
            Jain Dosti Federation
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            link.href.startsWith('/#') ? (
              <a
                key={link.name}
                href={isHomePage ? link.href.substring(1) : link.href}
                className="text-slate hover:text-primary transition-colors text-sm font-medium"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className="text-slate hover:text-primary transition-colors text-sm font-medium"
              >
                {link.name}
              </Link>
            )
          ))}
          
          <button 
            onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
            className="flex items-center gap-1.5 text-slate hover:text-primary transition-colors text-sm font-medium"
            title="Toggle Language"
            aria-label="Toggle language"
          >
            <Globe size={16} />
            {language === 'en' ? 'हिन्दी' : 'English'}
          </button>

          <a
            href={isHomePage ? "#join" : "/#join"}
            className="bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all hover:scale-105 hover:shadow-lg"
          >
            {t.nav.joinUs}
          </a>
        </nav>

        {/* Mobile Toggle & Actions */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
            className="text-slate hover:text-primary flex items-center gap-1 text-sm font-medium"
            aria-label="Toggle language"
          >
            <Globe size={20} />
            <span className="sr-only">Toggle Language</span>
          </button>
          <button
            className="text-charcoal p-2 -mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-paper-warm border-t border-line overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                link.href.startsWith('/#') ? (
                  <a
                    key={link.name}
                    href={isHomePage ? link.href.substring(1) : link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-charcoal font-medium text-lg border-b border-slate/10 pb-2"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-charcoal font-medium text-lg border-b border-slate/10 pb-2"
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <a
                href={isHomePage ? "#join" : "/#join"}
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-primary text-white px-6 py-3 rounded-xl text-center font-medium mt-2"
              >
                {t.nav.joinUs}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
