import Reveal from './Reveal';
import { intro } from '@/lib/content';

export default function Intro() {
  return (
    <section className="py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          {/* Left: Text */}
          <div>
            <Reveal>
              <h2
                className="font-serif text-3xl leading-[1.2] sm:text-4xl lg:text-5xl"
                style={{ color: 'var(--color-ink)' }}
              >
                {intro.heading}
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p
                className="mt-6 text-base leading-relaxed sm:text-lg"
                style={{ color: 'var(--color-ink-light)' }}
              >
                {intro.paragraph}
              </p>
            </Reveal>
          </div>

          {/* Right: Image */}
          <div>
            <Reveal delay={0.15}>
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={intro.image}
                  alt="A serene woman meditating outdoors in nature, representing the calm and mindfulness cultivated in therapy"
                  className="w-full object-cover"
                  style={{ aspectRatio: '4/3' }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
