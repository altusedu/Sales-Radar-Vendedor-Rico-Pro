import { CtaButton } from './cta-button'

export function StickyMobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-graphite-dark p-3 shadow-2xl sm:hidden">
      <CtaButton>Quero minha previsibilidade financeira</CtaButton>
    </div>
  )
}
