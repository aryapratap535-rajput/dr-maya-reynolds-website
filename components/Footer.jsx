import { footer } from '@/lib/content';

export default function Footer() {
  return (
    <footer
      className="py-16"
      style={{ backgroundColor: 'var(--color-ink)', color: 'var(--color-cream)' }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Name + Credentials */}
          <div>
            <h3
              className="font-serif text-2xl"
              style={{ color: 'var(--color-cream)' }}
            >
              {footer.name}
            </h3>
            <p
              className="mt-2 text-sm"
              style={{ color: 'var(--color-cream)', opacity: 0.7 }}
            >
              {footer.credentials}
            </p>
          </div>

          {/* Address */}
          <div>
            <h4
              className="mb-4 font-serif text-lg"
              style={{ color: 'var(--color-accent-light)' }}
            >
              Office
            </h4>
            <p
              className="text-sm leading-relaxed"
              style={{ color: 'var(--color-cream)', opacity: 0.8 }}
            >
              {footer.address}
            </p>
          </div>

          {/* Services */}
          <div>
            <h4
              className="mb-4 font-serif text-lg"
              style={{ color: 'var(--color-accent-light)' }}
            >
              Services
            </h4>
            <ul className="space-y-2">
              {footer.services.map((service) => (
                <li
                  key={service}
                  className="text-sm"
                  style={{ color: 'var(--color-cream)', opacity: 0.8 }}
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-8 text-center"
          style={{ borderTopColor: 'rgba(246,241,233,0.15)', borderTopWidth: '1px' }}
        >
          <p
            className="text-xs"
            style={{ color: 'var(--color-cream)', opacity: 0.5 }}
          >
            {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
