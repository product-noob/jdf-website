import Hero from '../components/Hero';
import Pillars from '../components/Pillars';
import Tours from '../components/Tours';
import Philanthropy from '../components/Philanthropy';
import Testimonials from '../components/Testimonials';
import JoinUs from '../components/JoinUs';

export default function Home() {
  return (
    <main className="flex-grow">
      <Hero />
      <Pillars />
      <Tours />
      <Philanthropy />
      <Testimonials />
      <JoinUs />
    </main>
  );
}
