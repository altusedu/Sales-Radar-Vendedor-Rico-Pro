import Image from 'next/image'
import { Check } from 'lucide-react'
import { CtaButton } from './cta-button'
import { basePath } from '@/lib/base-path'

const stackItems = [
  {
    label: 'Licença Anual do Sistema Radar do Vendedor Rico PRO',
    value: 'R$ 497/ano',
  },
  { label: 'Simulador Anti-Prejuízo de Descontos', value: 'R$ 67/ano' },
  { label: 'Mapeador Automático de Metas Diárias', value: 'R$ 197/ano' },
  { label: 'Gestão de Comissões Pendentes', value: 'R$ 197/ano' },
  { label: 'Gestão de Meses Anteriores', value: 'R$ 247/ano' },
  { label: 'Módulo Acelerador de Comissões Integrado', value: 'R$ 67/ano' },
  { label: 'Backup Ilimitado na Nuvem', value: 'R$ 147/ano' },
]

export function OfferSection() {
  return (
    <section id="oferta" className="bg-offwhite scroll-mt-4">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:py-20">
        <div className="overflow-hidden rounded-3xl border-2 border-brand-orange bg-graphite text-offwhite shadow-2xl shadow-brand-orange/20">
          <Image
            src={`${basePath}/commandments-library.png`}
            alt="Todos os módulos do Radar do Vendedor Rico PRO"
            width={1200}
            height={500}
            className="w-full object-cover"
          />

          <div className="border-b border-white/10 bg-white/[0.03] px-6 py-8 text-center sm:px-10">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-orange sm:text-xs">
              Oferta Completa
            </span>
            <h2 className="mt-3 text-balance text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl">
              O Mapa do Vendedor de Alta Performance
            </h2>
          </div>

          <div className="px-6 py-8 sm:px-10">
            <ul className="space-y-4">
              {stackItems.map((item) => (
                <li key={item.label} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-orange text-white">
                    <Check className="size-4" strokeWidth={3} />
                  </span>
                  <span className="flex-1 text-pretty text-sm leading-relaxed sm:text-base">
                    {item.label}{' '}
                    <span className="whitespace-nowrap text-offwhite/40 line-through">
                      ({item.value})
                    </span>
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center">
              <p className="text-sm text-offwhite/60">
                Valor total:{' '}
                <span className="font-semibold line-through">R$ 1.419,00</span>
              </p>
              <p className="mt-3 text-sm font-medium uppercase tracking-wide text-offwhite/70">
                Hoje por apenas
              </p>
              <p className="mt-1 text-4xl font-extrabold leading-none text-brand-orange sm:text-5xl">
                12x de R$ 19,34
              </p>
              <p className="mt-2 text-sm text-offwhite/70">
                ou{' '}
                <span className="font-bold text-offwhite">
                  R$ 187,00/ano à vista
                </span>
              </p>
            </div>

            <div className="mt-8">
              <CtaButton>Quero o Radar PRO com desconto agora</CtaButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
