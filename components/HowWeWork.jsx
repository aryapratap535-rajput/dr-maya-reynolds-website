import Reveal from './Reveal';
import { about } from '@/lib/content';

export default function HowWeWork() {
  return (
    <section
      id="about"
      className="py-20 sm:py-28 lg:py-36"
      style={{ backgroundColor: 'var(--color-sand)' }}
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="grid items-center gap-8 sm:grid-cols-[240px_1fr] md:grid-cols-[300px_1fr] lg:gap-12">
          {/* Left: Image */}
          <Reveal>
            <div className="relative mx-auto w-full max-w-[240px] overflow-hidden rounded-2xl shadow-lg md:max-w-[300px]">
              <img
                src={about.image}
                alt="Portrait of Dr. Maya Reynolds, PsyD, licensed clinical psychologist in Santa Monica, CA"
                className="h-full w-full object-cover object-top"
                style={{ aspectRatio: '4/5' }}
              />
            </div>
          </Reveal>

          {/* Right: Text */}
          <div>
            <Reveal>
              <h2
                className="font-serif text-3xl leading-[1.2] sm:text-4xl"
                style={{ color: 'var(--color-ink)' }}
              >
                {about.heading}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p
                className="mt-4 font-serif text-xl italic sm:text-2xl"
                style={{ color: 'var(--color-accent-dark)' }}
              >
                {about.subheading}
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p
                className="mt-6 text-base leading-relaxed sm:text-lg"
                style={{ color: 'var(--color-ink-light)' }}
              >
                {about.paragraph}
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <a
                href={about.ctaLink}
                className="mt-8 inline-block rounded-full px-8 py-3.5 text-base font-medium transition-all duration-200 hover:opacity-90"
                style={{
                  backgroundColor: 'var(--color-accent)',
                  color: '#fff',
                }}
              >
                {about.cta}
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}