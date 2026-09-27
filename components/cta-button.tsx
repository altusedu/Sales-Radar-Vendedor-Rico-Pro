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
          window.fbq?.('track', 'InitiateCheckout', {
            content_name: 'Radar do Vendedor Rico PRO',
            value: 187,
            currency: 'BRL',
          })
        } else {
          window.fbq?.('track', 'Lead')
        }
      }}
      className={cn(
        'group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-orange px-6 py-4 text-center text-base font-extrabold uppercase leading-tight tracking-wide text-white shadow-lg shadow-brand-orange/30 transition-all hover:-translate-y-0.5 hover:bg-brand-orange-hover hover:shadow-xl hover:shadow-brand-orange/40 sm:text-lg',
        className,
      )}
    >
      <span className="text-balance">{children}</span>
      <ArrowRight className="size-5 shrink-0 transition-transform group-hover:translate-x-1" />
    </a>
  )
}
