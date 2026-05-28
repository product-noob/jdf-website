import { motion } from 'motion/react';
import { ArrowRight, UsersRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import { executiveCommittee, MemberAvatar } from './Team';

const previewMembers = executiveCommittee.filter((member) =>
  ['Founder', 'Chairman', 'President'].includes(member.designation)
);

export default function TeamPreview() {
  return (
    <section id="team" className="bg-cream py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              <UsersRound size={16} />
              Our Team
            </span>
            <h2 className="mt-5 text-4xl font-serif font-bold leading-tight text-charcoal md:text-5xl">
              Meet the people behind JDF.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate">
              A committed executive and working committee guides every yatra, seva initiative, and community gathering with care.
            </p>
            <Link
              to="/team"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-medium text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-hover hover:gap-3"
            >
              Meet the full team
              <ArrowRight size={18} />
            </Link>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-3">
            {previewMembers.map((member, index) => (
              <motion.article
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative overflow-hidden rounded-panel border border-line bg-paper p-6 text-center shadow-paper"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-[#F0B84F] to-primary" />
                <div className="flex justify-center">
                  <MemberAvatar member={member} index={index} />
                </div>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  {member.designation}
                </p>
                <h3 className="mt-2 font-serif text-xl font-bold leading-tight text-charcoal">{member.name}</h3>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
