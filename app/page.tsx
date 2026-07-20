import { AscendExperience } from '@/components/three/AscendExperience';
import {
  AppShowcase,
  Bottom,
  Hero,
  Manifesto,
  Middle,
  Nav,
  Progression,
  Stats,
} from '@/components/sections/Sections';

export const dynamic = 'force-static';

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Ascend',
    applicationCategory: 'LifestyleApplication',
    operatingSystem: 'iOS, Android, Web',
    description:
      'RPG-inspired identity transformation system with rituals, quests, XP, stats, achievements, and mentor intelligence.',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AscendExperience />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <Manifesto />
        <Progression />
        <Stats />
        <Middle />
        <AppShowcase />
        <Bottom />
      </main>
      <footer className="relative z-10 border-t border-white/10 bg-black/60 px-5 py-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-[#8d8e96] md:flex-row md:items-center md:justify-between">
          <p className="font-semibold tracking-[.35em] text-white">ASCEND</p>
          <nav aria-label="Footer" className="flex flex-wrap gap-5">
            <a href="#system">System</a>
            <a href="#app">App</a>
            <a href="#pricing">Access</a>
            <a href="#top">Back to top</a>
          </nav>
          <p>© 2026 Ascend. Become what you build.</p>
        </div>
      </footer>
    </>
  );
}
