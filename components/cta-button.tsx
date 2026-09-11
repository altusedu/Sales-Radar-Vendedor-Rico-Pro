import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type CtaButtonProps = {
  children: React.ReactNode
  className?: string
}

export function CtaButton({ children, className }: CtaButtonProps) {
  return (
    <a
      href="#oferta"
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
