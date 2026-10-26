import Image from 'next/image'
import { Check } from 'lucide-react'
import { CtaButton } from './cta-button'
import { basePath } from '@/lib/base-path'
import { checkoutRadar } from '@/lib/dados-estruturados'

const itens = [
  { label: 'Calculadora de meta de comissão', valor: 197 },
  { label: 'Vendas e atendimentos que você precisa fazer por dia', valor: 87 },
  { label: 'Dicas de uso e fórmulas de cada indicador', valor: 147 },
  { label: 'Cálculo pelos dias que você vai trabalhar no mês', valor: 47 },
  { label: 'Acesso pelo celular, tablet ou computador', valor: null },
]

const valorTotal = itens.reduce((soma, { valor }) => soma + (valor ?? 0), 0)

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
              {itens.map(({ label, valor }) => (
                <li key={label} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-orange text-white">
                    <Check className="size-4" strokeWidth={3} />
                  </span>
                  <span className="flex-1 text-pretty text-sm leading-relaxed sm:text-base">
                    {label}
                  </span>
                  {valor === null ? (
                    <span className="mt-0.5 shrink-0 whitespace-nowrap rounded-full bg-brand-orange/15 px-2 py-0.5 text-xs font-bold uppercase tracking-wide text-brand-orange">
                      Bônus
                    </span>
                  ) : (
                    <span className="shrink-0 whitespace-nowrap text-right text-sm leading-relaxed text-offwhite/40 line-through tabular-nums sm:text-base">
                      R$ {valor}
                    </span>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center">
              <p className="text-sm text-offwhite/60">
                Tudo isso deveria custar{' '}
                <span className="font-semibold line-through">R$ {valorTotal}</span>
              </p>
              <p className="mt-3 text-sm font-medium text-offwhite/80">
                Mas você pode ter tudo isso agora mesmo por:
              </p>
              <p className="mt-3 text-brand-orange">
                <span className="sr-only">R$ 27,00</span>
                <span aria-hidden="true" className="flex items-end justify-center gap-1.5">
                  <span className="pb-2 text-base font-semibold leading-none sm:text-lg">
                    R$
                  </span>
                  <span className="text-8xl font-extrabold leading-[0.82] tracking-tight sm:text-9xl">
                    27
                  </span>
                  <span className="self-start pt-1 text-base font-semibold leading-none sm:text-lg">
                    ,00
                  </span>
                </span>
              </p>
              <p className="mt-2 text-sm text-offwhite/70">
                Pagamento único, sem mensalidade e com garantia incondicional de
                7 dias.
              </p>
            </div>
            <p className="mt-3 text-center text-xs text-offwhite/40">
              Valores de referência dos recursos incluídos, não preços de venda
              avulsa.
            </p>

            <div className="mt-8">
              <CtaButton checkoutUrl={checkoutRadar}>
                Quero o controle da minha comissão!
              </CtaButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
