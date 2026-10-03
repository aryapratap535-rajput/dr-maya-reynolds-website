import Reveal from './Reveal';

const office = {
  heading: 'A Calm Space for Healing in Santa Monica',
  text: 'My Santa Monica office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment. Clients often tell me the space itself helps them feel more at ease the moment they arrive.',
  address: '123th Street 45 W, Santa Monica, CA 90401',
  details: [
    'In-person sessions in Santa Monica',
    'Secure telehealth for clients located in California',
    'Private, comfortable, and safe',
  ],
  cta: 'Schedule Your First Visit',
  ctaLink: '#contact',
  images: [
    {
      src: '/images/office-1.jpeg',
      alt: 'Calm therapy office with natural light in Santa Monica',
    },
    {
      src: '/images/office-2.jpeg',
      alt: 'Comfortable, private therapy room in Santa Monica',
    },
  ],
};

export default function OurOffice() {
  return (
    <section id="our-office" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text column (first on mobile) */}
          <div>
            <Reveal>
              <h2
                className="font-serif text-3xl leading-tight sm:text-4xl"
                style={{ color: 'var(--color-ink)' }}
              >
                {office.heading}
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p
                className="mt-6 text-base leading-relaxed sm:text-lg"
                style={{ color: 'var(--color-ink-light)' }}
              >
                {office.text}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <ul className="mt-8 space-y-4">
                <li className="flex items-start gap-3">
                  <svg
                    className="mt-1 h-5 w-5 flex-shrink-0"
                    style={{ color: 'var(--color-accent)' }}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                  <span style={{ color: 'var(--color-ink)' }}>{office.address}</span>
                </li>
                {office.details.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-2.5 h-2 w-2 flex-shrink-0 rounded-full"
                      style={{ backgroundColor: 'var(--color-secondary)' }}
                    />
                    <span style={{ color: 'var(--color-ink-light)' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.3}>
              <a
                href={office.ctaLink}
                className="mt-10 inline-block rounded-full px-8 py-3.5 text-base font-medium transition-all duration-200 hover:opacity-90"
                style={{ backgroundColor: 'var(--color-accent)', color: '#fff' }}
              >
                {office.cta}
              </a>
            </Reveal>
          </div>

          {/* Images column */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            <Reveal delay={0.15}>
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={office.images[0].src}
                  alt={office.images[0].alt}
                  className="h-full w-full object-cover"
                  style={{ aspectRatio: '3/4' }}
                />
              </div>
            </Reveal>
            <Reveal delay={0.25} className="pt-8">
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={office.images[1].src}
                  alt={office.images[1].alt}
                  className="h-full w-full object-cover"
                  style={{ aspectRatio: '3/4' }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}