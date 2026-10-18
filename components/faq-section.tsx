'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { faqs } from '@/lib/faqs'

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="bg-offwhite">
      <div className="mx-auto max-w-3xl px-4 pb-12 sm:pb-14">
        <h2 className="text-center text-2xl font-extrabold tracking-tight text-graphite sm:text-3xl">
          Perguntas Frequentes
        </h2>

        <div className="mt-8 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-graphite/10 bg-white"
              >
                <button
                  type="button"
                  onClick={() => {
                    if (!isOpen) window.fbq?.('trackCustom', 'FAQAberta', { pergunta: faq.question })
                    setOpenIndex(isOpen ? null : index)
                  }}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-base font-semibold text-graphite">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      'size-5 shrink-0 text-brand-orange transition-transform',
                      isOpen && 'rotate-180',
                    )}
                  />
                </button>
                <div
                  className={cn(
                    'grid transition-all duration-300 ease-out',
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0',
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-pretty text-sm leading-relaxed text-graphite/75">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
