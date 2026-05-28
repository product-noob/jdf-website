import { Crown, UsersRound } from 'lucide-react';
import { executiveCommittee, workingCommittee, type TeamMember } from '../components/Team';

function initials(name: string) {
  return name
    .replace(/\([^)]*\)/g, '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('');
}

function PreviewMemberCard({ member, featured = false }: { member: TeamMember; featured?: boolean }) {
  return (
    <article className={`rounded-paper border border-line bg-white shadow-paper ${featured ? 'p-6' : 'p-5'}`}>
      <div className="flex items-center gap-4">
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            width={featured ? 76 : 60}
            height={featured ? 76 : 60}
            className={`${featured ? 'h-[76px] w-[76px]' : 'h-[60px] w-[60px]'} rounded-full border border-line bg-paper-warm object-cover`}
          />
        ) : (
          <div className={`${featured ? 'h-[76px] w-[76px] text-2xl' : 'h-[60px] w-[60px] text-lg'} flex shrink-0 items-center justify-center rounded-full border border-line bg-paper-warm font-serif font-bold text-ink`}>
            {initials(member.name)}
          </div>
        )}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">{member.designation}</p>
          <h3 className={`${featured ? 'text-2xl' : 'text-xl'} mt-1 font-serif font-bold leading-tight text-ink`}>
            {member.name}
          </h3>
        </div>
      </div>
    </article>
  );
}

export default function TeamPagePreview() {
  const featuredMembers = executiveCommittee.filter((member) => member.tier === 'founder' || member.tier === 'core');
  const executiveMembers = executiveCommittee.filter((member) => member.tier === 'executive');

  return (
    <main className="min-h-screen bg-paper pb-20 pt-28">
      <section className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-8 border-b border-line pb-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              <Crown size={16} aria-hidden="true" />
              JDF Executive Committee 2023-25
            </p>
            <h1 className="mt-5 font-serif text-5xl font-bold leading-tight text-ink md:text-6xl">
              The people guiding JDF with seva, trust, and friendship.
            </h1>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-ink-muted">
            A structured leadership team supported by an active working committee carries forward the federation's spiritual and service-led initiatives.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="mb-5 font-serif text-3xl font-bold text-ink">Core Leadership</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {featuredMembers.map((member) => (
              <PreviewMemberCard key={member.name} member={member} featured />
            ))}
          </div>
        </div>

        <div className="mt-14">
          <h2 className="mb-5 font-serif text-3xl font-bold text-ink">Office Bearers</h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {executiveMembers.map((member) => (
              <PreviewMemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>

        <div className="mt-14 rounded-paper border border-line bg-paper-warm p-6 md:p-8">
          <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            <UsersRound size={16} aria-hidden="true" />
            JDF Working Committee 2023-25
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-ink">Working Committee</h2>
          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {workingCommittee.map((member) => (
              <div key={member.name} className="rounded-paper border border-line bg-white px-4 py-3 shadow-sm">
                <p className="text-sm font-semibold text-ink">{member.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
