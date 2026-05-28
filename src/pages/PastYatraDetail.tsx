import { useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, CalendarDays, Download, FileText, Image as ImageIcon, Map as MapIcon, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import OptimizedImage from '../components/OptimizedImage';

export default function PastYatraDetail() {
  const { id } = useParams();
  const { t } = useLanguage();
  const navigate = useNavigate();

  const yatra = t.pastYatras.list.find((item) => item.id === (id ? parseInt(id, 10) : -1));

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!yatra) {
      navigate('/past-yatras');
    }
  }, [navigate, yatra]);

  if (!yatra) return null;

  return (
    <main className="min-h-screen bg-alabaster pb-20 pt-20">
      <section className="relative min-h-[68vh] flex items-end overflow-hidden">
        <OptimizedImage
          src={yatra.image}
          alt={yatra.title}
          priority
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/20" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-12 pt-24 text-white">
          <Link
            to="/past-yatras"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-md px-4 py-2 rounded-full transition-all text-sm font-medium mb-16"
          >
            <ArrowLeft size={16} />
            Back to timeline
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full font-serif font-bold mb-6">
              <CalendarDays size={18} />
              {yatra.dates}
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-5 leading-tight">
              {yatra.title}
            </h1>
            <div className="flex items-start gap-3 text-white/85 text-lg">
              <MapPin size={22} className="mt-1 shrink-0 text-primary" />
              <span>{yatra.location}</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mt-14">
        <div className="grid lg:grid-cols-[0.9fr_1.4fr] gap-12">
          <aside className="lg:sticky lg:top-28 self-start bg-paper border border-line rounded-paper p-6 md:p-8 shadow-paper">
            <div className="flex items-center gap-3 text-charcoal mb-8">
              <MapIcon className="text-primary" size={26} />
              <h2 className="text-2xl font-serif font-bold">{t.pastYatras.itineraryTitle}</h2>
            </div>

            <ol className="space-y-7">
              {yatra.itinerary.map((item, index) => (
                <li key={item} className="relative pl-10 text-slate leading-relaxed">
                  <span className="absolute left-0 top-0 w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ol>

            {yatra.pdf && (
              <div className="mt-10 pt-8 border-t border-slate/10">
                <div className="flex items-center gap-3 text-charcoal mb-4">
                  <FileText className="text-primary" size={24} />
                  <h3 className="text-xl font-serif font-bold">Download Yatra PDF</h3>
                </div>
                <a
                  href={yatra.pdf.href}
                  download
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-charcoal px-5 py-3 text-white font-semibold hover:bg-primary transition-colors"
                >
                  <Download size={18} />
                  {yatra.pdf.title}
                </a>
              </div>
            )}
          </aside>

          <div>
            <div className="flex items-center gap-3 text-charcoal mb-8">
              <ImageIcon className="text-primary" size={28} />
              <h2 className="text-3xl font-serif font-bold">{t.pastYatras.galleryTitle}</h2>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {yatra.gallery.map((imgUrl, index) => (
                <motion.figure
                  key={imgUrl}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className={`overflow-hidden rounded-paper bg-paper shadow-paper ${
                    index === 0 ? 'col-span-2 aspect-[16/8]' : 'aspect-square'
                  }`}
                >
                  <OptimizedImage
                    src={imgUrl}
                    alt={`${yatra.title} ${index + 1}`}
                    width={index === 0 ? 1200 : 720}
                    height={index === 0 ? 600 : 720}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </motion.figure>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
