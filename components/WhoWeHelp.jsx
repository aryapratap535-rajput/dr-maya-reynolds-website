import Reveal from './Reveal';
import { services } from '@/lib/content';

export default function WhoWeHelp() {
  return (
    <section
      id="services"
      className="py-20 sm:py-28 lg:py-36"
      style={{ backgroundColor: 'var(--color-sand)' }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <h2
            className="mb-16 text-center font-serif text-3xl sm:text-4xl lg:text-5xl"
            style={{ color: 'var(--color-ink)' }}
          >
            {services.heading}
          </h2>
        </Reveal>

        <div className="grid gap-12 md:grid-cols-3 lg:gap-8">
          {services.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <div className="flex flex-col items-center text-center">
                <div className="relative w-full overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={item.image}
                    alt={item.title + ' — Dr. Maya Reynolds, PsyD, Santa Monica therapy service'}
                    className="w-full object-cover transition-transform duration-700 hover:scale-105"
                    style={{ aspectRatio: '4/5' }}
                  />
                </div>
                <h3
                  className="mt-6 font-serif text-2xl sm:text-3xl"
                  style={{ color: 'var(--color-primary)' }}
                >
                  {item.title}
                </h3>
                <p
                  className="mt-4 text-sm leading-relaxed sm:text-base"
                  style={{ color: 'var(--color-ink-light)' }}
                >
                  {item.text}
                </p>
                <a
                  href={item.linkHref}
                  className="mt-5 inline-block rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-200 hover:opacity-90"
                  style={{
                    backgroundColor: 'var(--color-accent)',
                    color: '#fff',
                  }}
                >
                  {item.linkText}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
