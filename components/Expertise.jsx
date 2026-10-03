import Reveal from './Reveal';
import { approach } from '@/lib/content';

export default function Expertise() {
  return (
    <section id="approach" className="py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <Reveal>
          <h2
            className="text-center font-serif text-3xl leading-[1.2] sm:text-4xl lg:text-5xl"
            style={{ color: 'var(--color-ink)' }}
          >
            {approach.heading}
          </h2>
        </Reveal>

        <div className="mx-auto mt-16 max-w-2xl">
          {approach.points.map((point, i) => (
            <Reveal key={point.title} delay={i * 0.08}>
              <div
                className="border-t py-6 text-center"
                style={{ borderColor: 'var(--color-secondary-dark)' }}
              >
                <h3
                  className="font-serif text-xl italic sm:text-2xl"
                  style={{ color: 'var(--color-primary)' }}
                >
                  {point.title}
                </h3>
                <p
                  className="mt-2 text-sm sm:text-base"
                  style={{ color: 'var(--color-ink-light)' }}
                >
                  {point.text}
                </p>
              </div>
            </Reveal>
          ))}
          <div
            className="border-t"
            style={{ borderColor: 'var(--color-secondary-dark)' }}
          />
        </div>
      </div>
    </section>
  );
}
