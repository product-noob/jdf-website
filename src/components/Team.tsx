import { motion } from 'motion/react';
import { Crown, UsersRound } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

export type TeamMember = {
  name: string;
  designation: string;
  tier: 'founder' | 'core' | 'executive' | 'working';
  image?: string;
};

export const executiveCommittee: TeamMember[] = [
  { name: 'Sripal Bantia', designation: 'Founder', tier: 'founder' },
  { name: 'Anup Sririmal', designation: 'Chairman', tier: 'core' },
  { name: 'Ashish Bafna', designation: 'Vice Chairman', tier: 'core' },
  { name: 'Mitesh Surana', designation: 'President', tier: 'core', image: `${import.meta.env.BASE_URL}images/members/Mitesh Surana.png` },
  { name: 'Tarun Bohra', designation: 'Vice President', tier: 'executive' },
  { name: 'Sudeep Chajjed', designation: 'Vice President', tier: 'executive' },
  { name: 'Mahendra Kataria', designation: 'Secretary', tier: 'executive' },
  { name: 'Ashik Pirgal', designation: 'Joint Secretary', tier: 'executive' },
  { name: 'Anita Kothari', designation: 'Treasurer', tier: 'executive' },
  { name: 'Sandeep Kataria', designation: 'PRO', tier: 'executive' },
];

const workingCommittee = [
  'Anil Tatiya',
  'Darshan Mutha',
  'Manoj Surana',
  'Shubham Gadiya',
  'Vikas Bafna',
  'Deepak Dhoka',
  'Nirmal Bohra',
  'Sunil Ostwal',
  'Dilkhush Bafna (D.K.)',
  'Bherulal Sancheti',
  'Rakesh Kataria',
  'Surendra Lodha',
].map((name) => ({ name, designation: 'Working Committee', tier: 'working' as const }));

const avatarStyles = [
  'from-[#7A1F2D] via-[#D96C4A] to-[#F0B84F]',
  'from-[#264653] via-[#2A9D8F] to-[#E9C46A]',
  'from-[#402B3A] via-[#B04A5A] to-[#F4A261]',
  'from-[#1D3557] via-[#457B9D] to-[#A8DADC]',
  'from-[#3A2E39] via-[#9A6A4F] to-[#E9C46A]',
  'from-[#5F0F40] via-[#9A031E] to-[#FB8B24]',
];

function initials(name: string) {
  return name
    .replace(/\([^)]*\)/g, '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('');
}

export function MemberAvatar({ member, index, large = false }: { member: TeamMember; index: number; large?: boolean }) {
  const gradient = avatarStyles[index % avatarStyles.length];
  const size = large ? 'h-28 w-28' : 'h-24 w-24';

  if (member.image) {
    return (
      <div className={`${size} rounded-full bg-gradient-to-br ${gradient} p-[3px] shadow-lg shadow-primary/10`}>
        <OptimizedImage
          src={member.image}
          alt={member.name}
          width={large ? 112 : 96}
          height={large ? 112 : 96}
          className="h-full w-full rounded-full bg-cream object-cover object-center"
        />
      </div>
    );
  }

  return (
    <div className={`${size} rounded-full bg-gradient-to-br ${gradient} p-[3px] shadow-lg shadow-primary/10`}>
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-cream">
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-20`} />
        <div className="absolute -right-4 -top-5 h-16 w-16 rounded-full bg-white/30" />
        <span className={`${large ? 'text-3xl' : 'text-2xl'} relative font-serif font-bold text-charcoal`}>
          {initials(member.name)}
        </span>
      </div>
    </div>
  );
}

function MemberCard({ member, index, featured = false }: { member: TeamMember; index: number; featured?: boolean; key?: string }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.04, 0.28) }}
      className={`group relative overflow-hidden rounded-panel border bg-paper text-center shadow-paper transition-all duration-300 hover:-translate-y-1 hover:shadow-lifted ${
        featured ? 'border-primary/20 p-7' : 'border-line p-6'
      }`}
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-[#F0B84F] to-primary opacity-80" />
      <div className="flex justify-center">
        <MemberAvatar member={member} index={index} large={featured} />
      </div>
      <div className="mt-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{member.designation}</p>
        <h3 className={`${featured ? 'text-2xl' : 'text-xl'} mt-2 font-serif font-bold leading-tight text-charcoal`}>
          {member.name}
        </h3>
      </div>
    </motion.article>
  );
}

export default function Team() {
  const featuredMembers = executiveCommittee.filter((member) => member.tier === 'founder' || member.tier === 'core');
  const executiveMembers = executiveCommittee.filter((member) => member.tier === 'executive');

  return (
    <section id="team" className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary"
          >
            <Crown size={16} />
            JDF Executive Committee 2023-25
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="mt-5 text-4xl font-serif font-bold leading-tight text-charcoal md:text-5xl"
          >
            The people guiding JDF with seva, trust, and friendship.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate"
          >
            A structured leadership team supported by an active working committee, carrying forward the federation's spiritual and service-led initiatives.
          </motion.p>
        </div>

        <div className="mb-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {featuredMembers.map((member, index) => (
            <MemberCard key={member.name} member={member} index={index} featured />
          ))}
        </div>

        <div className="rounded-panel border border-line bg-paper/80 p-5 shadow-paper md:p-8">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Executive Committee</p>
              <h3 className="mt-2 text-3xl font-serif font-bold text-charcoal">Office Bearers</h3>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {executiveMembers.map((member, index) => (
              <MemberCard key={member.name} member={member} index={index + featuredMembers.length} />
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-panel border border-line bg-paper/80 p-5 shadow-paper md:p-8">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                <UsersRound size={16} />
                JDF Working Committee 2023-25
              </p>
              <h3 className="mt-2 text-3xl font-serif font-bold text-charcoal">Working Committee</h3>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {workingCommittee.map((member, index) => (
              <motion.article
                key={member.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.45, delay: Math.min(index * 0.035, 0.26) }}
                className="relative overflow-hidden rounded-panel border border-line bg-paper p-5 text-center shadow-paper transition-all duration-300 hover:-translate-y-1 hover:shadow-lifted"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-[#F0B84F] to-primary opacity-70" />
                <div className="flex justify-center">
                  <MemberAvatar member={member} index={index + executiveCommittee.length} />
                </div>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-primary">Member</p>
                <h4 className="mt-2 font-serif text-xl font-bold leading-tight text-charcoal">{member.name}</h4>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
