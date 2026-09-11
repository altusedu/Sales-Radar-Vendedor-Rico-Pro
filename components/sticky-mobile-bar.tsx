'use client'

import { useEffect, useState } from 'react'

export function StickyMobileBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <div className="animate-slide-up fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-graphite-dark/95 backdrop-blur md:hidden">
      <div className="flex items-center justify-between gap-3 px-4 py-3">
        <div className="leading-tight">
          <p className="text-[10px] uppercase tracking-wider text-offwhite/60">
            Radar PRO
          </p>
          <p className="text-base font-extrabold text-offwhite">
            R$ 187<span className="text-sm font-medium text-offwhite/70">/ano</span>
          </p>
        </div>
        <a
          href="#oferta"
          className="rounded-lg bg-brand-orange px-5 py-3 text-sm font-extrabold uppercase tracking-wide text-white transition-colors hover:bg-brand-orange-hover"
        >
          Assinar Agora
        </a>
      </div>
    </div>
  )
}
