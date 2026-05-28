import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-charcoal text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16 border-b border-white/10 pb-16">
          
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-serif font-bold text-xl">
                JDF
              </div>
              <span className="font-serif font-semibold text-xl text-white tracking-tight">
                {t.footer.title}
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-8 pr-4">
              {t.footer.desc}
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/jaindostifederation/" aria-label="Jain Dosti Federation on Facebook" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-primary hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/jain_dosti_federation/" aria-label="Jain Dosti Federation on Instagram" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-primary hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">{t.footer.explore}</h4>
            <ul className="space-y-4">
              <li><a href={`${import.meta.env.BASE_URL}#about`} className="text-white/60 hover:text-primary transition-colors text-sm">{t.footer.aboutUs}</a></li>
              <li><a href={`${import.meta.env.BASE_URL}#tours`} className="text-white/60 hover:text-primary transition-colors text-sm">{t.footer.upcomingYatras}</a></li>
              <li><a href={`${import.meta.env.BASE_URL}#seva`} className="text-white/60 hover:text-primary transition-colors text-sm">{t.footer.philanthropyProjects}</a></li>
              <li><Link to="/team" className="text-white/60 hover:text-primary transition-colors text-sm">{t.footer.memberDirectory}</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">{t.footer.resources}</h4>
            <ul className="space-y-4">
              <li><Link to="/past-yatras" className="text-white/60 hover:text-primary transition-colors text-sm">{t.footer.downloadItineraries}</Link></li>
              <li><a href={`${import.meta.env.BASE_URL}#join`} className="text-white/60 hover:text-primary transition-colors text-sm">{t.footer.volunteerGuidelines}</a></li>
              <li><a href={`${import.meta.env.BASE_URL}#donate`} className="text-white/60 hover:text-primary transition-colors text-sm">{t.footer.donationFaqs}</a></li>
              <li><a href={`${import.meta.env.BASE_URL}#tours`} className="text-white/60 hover:text-primary transition-colors text-sm">{t.footer.safetyProtocols}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">{t.footer.contact}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm whitespace-pre-wrap">
                  {t.footer.address1}
                  {"\n"}
                  {t.footer.address2}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <span className="text-white/60 text-sm">+91 98444 00456</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <span className="text-white/60 text-sm">namaste@jaindostifederation.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>© {new Date().getFullYear()} {t.footer.rights}</p>
          <div className="flex gap-6">
            <a href={`mailto:namaste@jaindostifederation.com?subject=${encodeURIComponent(t.footer.privacyPolicy)}`} className="hover:text-white transition-colors">{t.footer.privacyPolicy}</a>
            <a href={`mailto:namaste@jaindostifederation.com?subject=${encodeURIComponent(t.footer.termsOfService)}`} className="hover:text-white transition-colors">{t.footer.termsOfService}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
