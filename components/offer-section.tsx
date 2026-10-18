import Image from 'next/image'
import { Check } from 'lucide-react'
import { CtaButton } from './cta-button'
import { basePath } from '@/lib/base-path'
import { checkoutRadar } from '@/lib/dados-estruturados'

const itens = [
  'Calculadora de meta de comissão e faturamento do mês',
  'Vendas e atendimentos que você precisa fazer por dia',
  'Cálculo pelos dias que você vai trabalhar no mês',
  'Dicas de uso e fórmulas de cada indicador',
  'Acesso pelo celular, tablet ou computador',
]

export function OfferSection() {
  return (
    <section id="oferta" className="bg-offwhite scroll-mt-4">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:py-20">
        <div className="overflow-hidden rounded-3xl border-2 border-brand-orange bg-graphite text-offwhite shadow-2xl shadow-brand-orange/20">
          <Image
            src={`${basePath}/hero/hero-mockup.webp`}
            alt="Radar do Vendedor Rico no notebook e no celular"
            width={1536}
            height={1024}
            className="w-full object-cover"
          />

          <div className="border-b border-white/10 bg-white/[0.03] px-6 py-8 text-center sm:px-10">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-orange sm:text-xs">
              Sua oferta
            </span>
            <h2 className="mt-3 text-balance text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl">
              Radar do Vendedor Rico
            </h2>
            <p className="mt-2 text-pretty text-sm text-offwhite/70 sm:text-base">
              O primeiro passo para o controle do seu salário.
            </p>
          </div>

          <div className="px-6 py-8 sm:px-10">
            <ul className="space-y-4">
              {itens.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-orange text-white">
                    <Check className="size-4" strokeWidth={3} />
                  </span>
                  <span className="flex-1 text-pretty text-sm leading-relaxed sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center">
              <p className="text-sm font-medium uppercase tracking-wide text-offwhite/70">
                Pagamento único
              </p>
              <p className="mt-1 text-5xl font-extrabold leading-none text-brand-orange sm:text-6xl">
                R$ 47
              </p>
              <p className="mt-2 text-sm text-offwhite/70">
                Sem mensalidade e com garantia incondicional de 7 dias.
              </p>
            </div>

            <div className="mt-8">
              <CtaButton checkoutUrl={checkoutRadar}>
                Quero o Radar do Vendedor Rico
              </CtaButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
