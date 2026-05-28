import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowDown, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const HERO_IMAGES = [
  `${import.meta.env.BASE_URL}images/JDF_Hero_001.jpeg`,
  `${import.meta.env.BASE_URL}images/JDF_Hero_003.jpeg`,
  `${import.meta.env.BASE_URL}images/JDF_Hero_005.jpg`,
  `${import.meta.env.BASE_URL}images/JDF_Hero_006.png`,
];

export default function HeroPreview() {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const currentImage = HERO_IMAGES[currentIndex] ?? HERO_IMAGES[0];

  useEffect(() => {
    if (reduceMotion) return undefined;

    const timer = window.setInterval(() => {
      setCurrentIndex((index) => (index + 1) % HERO_IMAGES.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  const copy = language === 'hi'
    ? {
        eyebrow: 'जैन दोस्ती फेडरेशन',
        title: 'सेवा की ओर एक कदम',
        body: 'जैन मूल्यों से जुड़े आध्यात्मिक यात्राओं, सेवा कार्यों और जीवनभर के सामुदायिक संबंधों का शांत, सुव्यवस्थित अनुभव।',
        primary: 'यात्राएं देखें',
        secondary: 'संपर्क करें',
        imageAlt: 'Jain Dosti Federation community gathering',
        scroll: 'नीचे देखें',
      }
    : {
        eyebrow: 'Jain Dosti Federation',
        title: 'A step towards service',
        body: 'Spiritual yatras, seva initiatives, and lifelong community bonds rooted in Jain values.',
        primary: 'Explore Yatras',
        secondary: 'Contact JDF',
        imageAlt: 'Jain Dosti Federation community gathering',
        scroll: 'Scroll to explore',
      };

  return (
    <section className="relative overflow-hidden bg-paper pt-28 md:pt-32">
      <div className="mx-auto grid min-h-[calc(100svh-80px)] max-w-7xl items-center gap-10 px-5 pb-16 md:px-8 lg:grid-cols-[0.94fr_1.06fr] lg:gap-14 lg:pb-20">
        <div className="order-2 mx-auto max-w-2xl text-center lg:order-1 lg:mx-0 lg:text-left">
          <p className="mb-5 inline-flex rounded-control border border-line bg-paper-warm px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            {copy.eyebrow}
          </p>
          <h1 className="font-serif text-5xl font-bold leading-[1.04] tracking-normal text-ink md:text-7xl">
            {copy.title}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-ink-muted lg:mx-0">
            {copy.body}
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
            <Link
              to={{ pathname: '/', search: '?preview=1', hash: '#tours' }}
              className="inline-flex w-full items-center justify-center rounded-control bg-ink px-7 py-4 text-base font-semibold text-white shadow-sm transition-colors hover:bg-primary focus-visible:outline-primary sm:w-auto"
            >
              {copy.primary}
            </Link>
            <a
              href="tel:+919844400456"
              className="inline-flex w-full items-center justify-center gap-2 rounded-control border border-line bg-white px-7 py-4 text-base font-semibold text-ink transition-colors hover:border-primary hover:text-primary focus-visible:outline-primary sm:w-auto"
            >
              <Phone size={18} aria-hidden="true" />
              {copy.secondary}
            </a>
          </div>

          <a
            href="#about"
            className="mt-12 hidden items-center gap-2 text-sm font-medium text-ink-muted transition-colors hover:text-primary focus-visible:outline-primary lg:inline-flex"
          >
            <ArrowDown size={16} aria-hidden="true" />
            {copy.scroll}
          </a>
        </div>

        <div className="order-1 lg:order-2">
          <div className="mx-auto max-w-3xl">
            <div className="relative overflow-hidden rounded-paper border border-line bg-paper-warm p-2 shadow-paper">
              <div className="relative aspect-[5/3] overflow-hidden rounded-[6px] bg-paper-muted">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImage}
                    src={currentImage}
                    alt={copy.imageAlt}
                    width={1400}
                    height={900}
                    decoding={currentIndex === 0 ? 'sync' : 'async'}
                    fetchPriority={currentIndex === 0 ? 'high' : 'auto'}
                    loading={currentIndex === 0 ? 'eager' : 'lazy'}
                    className="absolute inset-0 h-full w-full object-cover"
                    initial={reduceMotion ? false : { opacity: 0, scale: 1.025 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: reduceMotion ? 0 : 0.9, ease: 'easeInOut' }}
                  />
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
