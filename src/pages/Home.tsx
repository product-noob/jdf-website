import Hero from '../components/Hero';
import Pillars from '../components/Pillars';
import Tours from '../components/Tours';
import PastYatras from '../components/PastYatras';
import Philanthropy from '../components/Philanthropy';
import TeamPreview from '../components/TeamPreview';
import Testimonials from '../components/Testimonials';
import JoinUs from '../components/JoinUs';

export default function Home() {
  return (
    <main className="flex-grow">
      <Hero />
      <Pillars />
      <Tours />
      <PastYatras />
      <Philanthropy />
      <TeamPreview />
      <Testimonials />
      <JoinUs />
    </main>
  );
}
