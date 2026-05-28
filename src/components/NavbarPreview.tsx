import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Globe, Menu, X } from 'lucide-react';
import { Link, type To } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const previewSearch = '?preview=1';

function previewTo(pathname: string, hash?: string): To {
  return { pathname, search: previewSearch, hash };
}

export default function NavbarPreview() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const labels = language === 'hi'
    ? {
        home: 'होम',
        yatras: 'यात्राएं',
        seva: 'सेवा',
        pastYatras: 'पिछली यात्राएं',
        team: 'टीम',
        contact: 'संपर्क करें',
        language: 'English',
        toggleLanguage: 'Switch language to English',
        openMenu: 'Open menu',
        closeMenu: 'Close menu',
      }
    : {
        home: 'Home',
        yatras: 'Yatras',
        seva: 'Seva',
        pastYatras: 'Past Yatras',
        team: 'Team',
        contact: 'Contact JDF',
        language: 'हिन्दी',
        toggleLanguage: 'Switch language to Hindi',
        openMenu: 'Open menu',
        closeMenu: 'Close menu',
      };

  const navLinks = [
    { label: labels.home, to: previewTo('/') },
    { label: labels.yatras, to: previewTo('/', '#tours') },
    { label: labels.seva, to: previewTo('/', '#seva') },
    { label: labels.pastYatras, to: previewTo('/past-yatras') },
    { label: labels.team, to: previewTo('/team') },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-paper/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link
          to={previewTo('/')}
          className="flex items-center gap-3 rounded-control focus-visible:outline-primary"
          aria-label="Jain Dosti Federation home"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white shadow-sm">
            <img
              src={`${import.meta.env.BASE_URL}images/JDF_Logo.png`}
              alt=""
              width={44}
              height={44}
              decoding="async"
              className="h-full w-full object-contain"
            />
          </span>
          <span className="hidden font-serif text-xl font-semibold tracking-tight text-ink sm:block">
            Jain Dosti Federation
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Preview main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="rounded-control text-sm font-medium text-ink-muted transition-colors hover:text-primary focus-visible:outline-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
            className="inline-flex items-center gap-2 rounded-control border border-line bg-white px-4 py-2 text-sm font-medium text-ink-muted transition-colors hover:text-primary focus-visible:outline-primary"
            aria-label={labels.toggleLanguage}
          >
            <Globe size={16} aria-hidden="true" />
            {labels.language}
          </button>
          <a
            href="tel:+919844400456"
            className="rounded-control bg-ink px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary focus-visible:outline-primary"
          >
            {labels.contact}
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink-muted transition-colors hover:text-primary focus-visible:outline-primary"
            aria-label={labels.toggleLanguage}
          >
            <Globe size={20} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink focus-visible:outline-primary"
            aria-label={isOpen ? labels.closeMenu : labels.openMenu}
            aria-expanded={isOpen}
            aria-controls="preview-mobile-menu"
          >
            {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            id="preview-mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-line bg-paper md:hidden"
            aria-label="Preview mobile navigation"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className="rounded-paper px-3 py-3 text-base font-medium text-ink transition-colors hover:bg-paper-warm focus-visible:outline-primary"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:+919844400456"
                onClick={() => setIsOpen(false)}
                className="mt-2 rounded-control bg-ink px-5 py-3 text-center text-base font-semibold text-white transition-colors hover:bg-primary focus-visible:outline-primary"
              >
                {labels.contact}
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
