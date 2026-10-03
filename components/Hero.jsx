import Reveal from './Reveal';
import { hero } from '@/lib/content';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24">
      {/* Decorative background shape */}
      <div
        className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full opacity-30 blur-3xl"
        style={{ backgroundColor: 'var(--color-secondary)' }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_1fr_0.7fr] lg:gap-8">
          {/* Left: large image */}
          <Reveal>
            <img
              src={hero.imageLeft}
            alt="Seated person with a hand on their abdomen, practicing body-focused mindfulness"
            />
          </Reveal>

          {/* Center: text */}
          <div className="px-6 text-center lg:px-0 lg:text-left">
            <Reveal>
              <span
                className="mb-3 block text-2xl sm:text-3xl"
                style={{ fontFamily: 'var(--font-hand), cursive', color: 'var(--color-accent)' }}
              >
                You don't have to keep pushing through it.
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h1
                className="font-serif text-4xl leading-[1.15] sm:text-5xl xl:text-[3.25rem]"
                style={{ color: 'var(--color-ink)' }}
              >
                {hero.heading}
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p
                className="mt-6 text-base leading-relaxed sm:text-lg"
                style={{ color: 'var(--color-ink-light)' }}
              >
                {hero.subtext}
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:items-start">
                <a
                  href={hero.cta1Link}
                  className="inline-block rounded-full px-8 py-3.5 text-base font-medium transition-all duration-200 hover:opacity-90"
                  style={{ backgroundColor: 'var(--color-accent)', color: '#fff' }}
                >
                  {hero.cta1}
                </a>
                <a
                  href={hero.cta2Link}
                  className="inline-block rounded-full border-2 px-8 py-3.5 text-base font-medium transition-all duration-200 hover:opacity-80"
                  style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }}
                >
                  {hero.cta2}
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right: smaller image, desktop only */}
          <div className="hidden pr-6 lg:block">
            <Reveal delay={0.25}>
              <img
                src={hero.imageRight}
                alt="Woman with tea representing calm and wellness"
                className="h-[300px] w-full rounded-2xl object-cover"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}