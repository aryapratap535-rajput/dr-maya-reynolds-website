'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Reveal from './Reveal';
import { faqs } from '@/lib/content';

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faqs" className="py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Reveal>
          <h2
            className="mb-12 text-center font-serif text-3xl leading-[1.2] sm:text-4xl lg:text-5xl"
            style={{ color: 'var(--color-ink)' }}
          >
            {faqs.heading}
          </h2>
        </Reveal>

        <div className="space-y-4">
          {faqs.items.map((item, i) => (
            <Reveal key={item.question} delay={i * 0.05}>
              <div
                className="overflow-hidden rounded-xl border"
                style={{ borderColor: 'var(--color-secondary-dark)' }}
              >
                <button
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  aria-expanded={openIndex === i}
                >
                  <span
                    className="font-serif text-lg sm:text-xl"
                    style={{ color: 'var(--color-ink)' }}
                  >
                    {item.question}
                  </span>
                  {openIndex === i ? (
                    <Minus
                      size={20}
                      className="shrink-0"
                      style={{ color: 'var(--color-accent)' }}
                    />
                  ) : (
                    <Plus
                      size={20}
                      className="shrink-0"
                      style={{ color: 'var(--color-accent)' }}
                    />
                  )}
                </button>
                {openIndex === i && (
                  <div
                    className="px-6 pb-5 text-base leading-relaxed"
                    style={{ color: 'var(--color-ink-light)' }}
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
