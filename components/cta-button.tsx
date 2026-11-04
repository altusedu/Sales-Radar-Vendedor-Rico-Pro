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
          const dadosClique = {
            content_name: 'Radar do Vendedor Rico',
            content_type: 'product',
            value: 27,
            currency: 'BRL',
          }
          window.fbq?.('trackCustom', 'CliqueCheckout', dadosClique)
          // AddToCart é o mesmo clique em evento padrão: o Gerenciador só separa por conjunto/anúncio os padrão.
          window.fbq?.('track', 'AddToCart', dadosClique)
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
