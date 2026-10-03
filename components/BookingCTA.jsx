import Reveal from './Reveal';
import { finalCTA } from '@/lib/content';

export default function BookingCTA() {
  return (
    <section
      id="contact"
      className="py-20 sm:py-28 lg:py-36"
      style={{ backgroundColor: 'var(--color-primary)' }}
    >
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <Reveal>
          <h2
            className="font-serif text-3xl leading-[1.2] sm:text-4xl lg:text-5xl"
            style={{ color: 'var(--color-cream)' }}
          >
            {finalCTA.heading}
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed sm:text-lg"
            style={{ color: 'var(--color-cream)', opacity: 0.85 }}
          >
            {finalCTA.text}
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <a
            href={finalCTA.ctaLink}
            className="mt-8 inline-block rounded-full px-8 py-3.5 text-base font-medium transition-all duration-200 hover:opacity-90"
            style={{
              backgroundColor: 'var(--color-accent)',
              color: '#fff',
            }}
          >
            {finalCTA.cta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
