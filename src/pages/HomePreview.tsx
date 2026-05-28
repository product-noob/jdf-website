import { ArrowRight, CalendarDays, HeartHandshake, Mail, MapPin, Phone, UsersRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import HeroPreview from '../components/HeroPreview';
import OptimizedImage from '../components/OptimizedImage';

function previewTo(pathname: string, hash?: string) {
  return { pathname, search: '?preview=1', hash };
}

export default function HomePreview() {
  const { t, language } = useLanguage();
  const latestYatras = [...t.pastYatras.list].reverse().slice(0, 3);
  const featuredTours = t.tours.toursList.slice(0, 3);

  const copy = language === 'hi'
    ? {
        aboutEyebrow: 'हम कौन हैं',
        aboutTitle: 'यात्रा, सेवा और मैत्री को एक शांत समुदाय में जोड़ना।',
        aboutBody: 'JDF परिवारों और सदस्यों को सुव्यवस्थित आध्यात्मिक यात्राओं, सेवा कार्यों और भरोसेमंद सामुदायिक संबंधों के माध्यम से जोड़ता है।',
        yatrasEyebrow: 'आगामी यात्राएं',
        yatrasTitle: 'साफ जानकारी, सरल निर्णय।',
        sevaEyebrow: 'सेवा',
        sevaTitle: 'जहां करुणा व्यवहार में बदलती है।',
        pastEyebrow: 'इतिहास',
        pastTitle: 'यात्राओं और सेवा की यात्रा।',
        teamEyebrow: 'टीम',
        teamTitle: 'अनुभवी नेतृत्व, सामुदायिक भरोसा।',
        contactTitle: 'JDF से जुड़ना चाहते हैं?',
        contactBody: 'यात्रा, सेवा या सदस्यता के लिए सीधे संपर्क करें।',
        viewDetails: 'विवरण देखें',
        viewTimeline: 'पूरी टाइमलाइन देखें',
        meetTeam: 'टीम देखें',
        call: 'कॉल करें',
        email: 'ईमेल करें',
      }
    : {
        aboutEyebrow: 'Who we are',
        aboutTitle: 'Bringing yatra, seva, and friendship into one calm community.',
        aboutBody: 'JDF connects families and members through organized spiritual journeys, service initiatives, and long-term community bonds rooted in Jain values.',
        yatrasEyebrow: 'Upcoming yatras',
        yatrasTitle: 'Clear journeys, easier decisions.',
        sevaEyebrow: 'Seva',
        sevaTitle: 'Where compassion becomes practical help.',
        pastEyebrow: 'Since 2015',
        pastTitle: 'A living archive of yatras and seva.',
        teamEyebrow: 'Team',
        teamTitle: 'Experienced leadership, community trust.',
        contactTitle: 'Want to connect with JDF?',
        contactBody: 'For yatras, seva, or membership, reach out directly.',
        viewDetails: 'View details',
        viewTimeline: 'View full timeline',
        meetTeam: 'Meet the team',
        call: 'Call JDF',
        email: 'Email JDF',
      };

  return (
    <main className="flex-grow bg-paper text-ink-muted">
      <HeroPreview />

      <section id="about" className="border-y border-line bg-paper-warm py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">{copy.aboutEyebrow}</p>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl font-bold leading-tight text-ink md:text-5xl">
              {copy.aboutTitle}
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-ink-muted">{copy.aboutBody}</p>
        </div>
      </section>

      <section id="tours" className="bg-paper py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">{copy.yatrasEyebrow}</p>
              <h2 className="mt-4 font-serif text-4xl font-bold text-ink md:text-5xl">{copy.yatrasTitle}</h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-ink-muted">{t.tours.subtitle}</p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {featuredTours.map((tour) => (
              <article key={tour.id} className="overflow-hidden rounded-paper border border-line bg-white shadow-paper">
                <OptimizedImage
                  src={tour.image}
                  alt={tour.title}
                  width={760}
                  height={460}
                  className="aspect-[16/10] w-full object-cover"
                />
                <div className="p-6">
                  <div className="mb-4 flex items-start gap-2 text-sm font-semibold text-primary">
                    <MapPin size={17} className="mt-0.5 shrink-0" aria-hidden="true" />
                    <span>{tour.location}</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold leading-tight text-ink">{tour.title}</h3>
                  <div className="mt-5 space-y-3 border-t border-line pt-5 text-sm text-ink-muted">
                    <p className="flex gap-2">
                      <CalendarDays size={17} className="shrink-0 text-primary" aria-hidden="true" />
                      <span>{tour.dates}</span>
                    </p>
                    <p>{tour.comfort}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="seva" className="bg-paper-warm py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">{copy.sevaEyebrow}</p>
            <h2 className="mt-4 font-serif text-4xl font-bold leading-tight text-ink md:text-5xl">{copy.sevaTitle}</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {t.philanthropy.causes.slice(0, 3).map((cause) => (
              <article key={cause.title} className="rounded-paper border border-line bg-paper p-6 shadow-paper">
                <HeartHandshake className="mb-5 text-primary" size={28} aria-hidden="true" />
                <h3 className="font-serif text-2xl font-bold text-ink">{cause.title}</h3>
                <p className="mt-4 line-clamp-4 leading-7 text-ink-muted">{cause.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pastYatras" className="bg-paper py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">{copy.pastEyebrow}</p>
              <h2 className="mt-4 font-serif text-4xl font-bold text-ink md:text-5xl">{copy.pastTitle}</h2>
            </div>
            <Link
              to={previewTo('/past-yatras')}
              className="inline-flex items-center gap-2 rounded-control bg-ink px-5 py-3 font-semibold text-white transition-colors hover:bg-primary focus-visible:outline-primary"
            >
              {copy.viewTimeline}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {latestYatras.map((yatra) => (
              <Link
                key={yatra.id}
                to={{ pathname: `/past-yatras/${yatra.id}`, search: '?preview=1' }}
                className="group rounded-paper border border-line bg-white p-5 shadow-paper transition-shadow hover:shadow-lifted focus-visible:outline-primary"
              >
                <p className="text-sm font-semibold text-primary">{yatra.dates}</p>
                <h3 className="mt-3 font-serif text-2xl font-bold leading-tight text-ink">{yatra.title}</h3>
                <p className="mt-3 line-clamp-2 text-sm leading-6 text-ink-muted">{yatra.location}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink group-hover:text-primary">
                  {copy.viewDetails}
                  <ArrowRight size={16} aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="bg-paper-warm py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 md:px-8 lg:grid-cols-[1fr_0.7fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">{copy.teamEyebrow}</p>
            <h2 className="mt-4 font-serif text-4xl font-bold leading-tight text-ink md:text-5xl">{copy.teamTitle}</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-ink-muted">
              A structured executive and working committee guides every yatra, seva initiative, and community gathering with care.
            </p>
          </div>
          <Link
            to={previewTo('/team')}
            className="inline-flex justify-center rounded-control border border-line bg-white px-6 py-4 font-semibold text-ink transition-colors hover:border-primary hover:text-primary focus-visible:outline-primary"
          >
            <UsersRound size={20} className="mr-2" aria-hidden="true" />
            {copy.meetTeam}
          </Link>
        </div>
      </section>

      <section id="join" className="bg-ink py-20 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 md:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="font-serif text-4xl font-bold">{copy.contactTitle}</h2>
            <p className="mt-3 text-white/70">{copy.contactBody}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="tel:+919844400456" className="inline-flex items-center justify-center gap-2 rounded-control bg-white px-6 py-4 font-semibold text-ink hover:bg-paper-warm focus-visible:outline-primary">
              <Phone size={18} aria-hidden="true" />
              {copy.call}
            </a>
            <a href="mailto:namaste@jdfindia.org" className="inline-flex items-center justify-center gap-2 rounded-control border border-white/20 px-6 py-4 font-semibold text-white hover:bg-white/10 focus-visible:outline-primary">
              <Mail size={18} aria-hidden="true" />
              {copy.email}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
