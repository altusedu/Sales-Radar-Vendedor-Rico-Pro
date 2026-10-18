'use client'

import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

type CtaButtonProps = {
  children: React.ReactNode
  className?: string
  checkoutUrl?: string
}

export function CtaButton({ children, className, checkoutUrl }: CtaButtonProps) {
  return (
    <a
      href={checkoutUrl ?? '#oferta'}
      onClick={() => {
        if (checkoutUrl) {
          window.fbq?.('trackCustom', 'CliqueCheckout', {
            content_name: 'Radar do Vendedor Rico',
            value: 47,
            currency: 'BRL',
          })
        } else {
          window.fbq?.('track', 'Lead')
        }
      }}
      className={cn(
        'cta-degrade group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-orange px-6 py-4 text-center text-base font-extrabold uppercase leading-tight tracking-wide text-white transition-transform hover:-translate-y-0.5 sm:text-lg',
        className,
      )}
    >
      <span className="text-balance">{children}</span>
      <ArrowRight className="size-5 shrink-0 transition-transform group-hover:translate-x-1" />
    </a>
  )
}
