import Image from 'next/image'
import { CloudUpload, Lock, ShieldCheck } from 'lucide-react'
import { CtaButton } from './cta-button'
import { basePath } from '@/lib/base-path'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-graphite text-offwhite">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-brand-orange/20 blur-[120px]"
      />
      <div className="relative mx-auto max-w-5xl px-4 pb-16 pt-12 text-center sm:pt-16">
        <div className="mb-6 flex flex-col items-center gap-4">
          <Image
            src={`${basePath}/logo-altus.jpg`}
            alt="Grupo Altus Educacional"
            width={72}
            height={72}
            className="size-16 rounded-xl object-cover ring-1 ring-white/10"
          />
          <span className="inline-flex items-center rounded-full border border-brand-orange/40 bg-brand-orange/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-orange sm:text-xs">
            Grupo Altus Educacional Apresenta
          </span>
        </div>

        <h1 className="mx-auto max-w-3xl text-pretty text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
          Meta não se bate dia 30:{' '}
          <span className="text-brand-orange">Se bate TODO DIA.</span> Saia do
          ciclo de incerteza e assuma o controle da sua comissão.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-offwhite/80 sm:text-lg">
          O Radar do Vendedor Rico PRO é o sistema definitivo que calcula seus
          atendimentos diários, protege sua margem contra descontos abusivos e
          coloca previsibilidade de 5 dígitos no seu bolso todos os meses.
        </p>

        <div className="relative mx-auto mt-10 max-w-3xl px-6 pb-8 sm:px-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 scale-90 rounded-full bg-brand-orange/30 blur-[80px]"
          />

          {/* Notebook: aqui entrava a mockup de tela gerada por IA (texto ilegível,
              não representava o produto de verdade). Trocado pela logo do Radar em
              vez de fingir uma interface — mais honesto que uma tela fake. */}
          <div className="relative mx-auto w-full max-w-[600px]">
            <div className="overflow-hidden rounded-t-lg border border-white/10 bg-graphite p-1.5 shadow-2xl">
              <div className="overflow-hidden rounded-md">
                <Image
                  src={`${basePath}/hero/radar-logo-minimalista.webp`}
                  alt="Radar do Vendedor Rico"
                  width={1600}
                  height={892}
                  priority
                  className="w-full"
                />
              </div>
            </div>
            <div className="mx-auto h-3 w-[94%] rounded-b-xl bg-gradient-to-b from-white/15 to-white/[0.03]" />
            <div className="mx-auto h-1.5 w-[36%] rounded-b-full bg-white/10" />

            {/* Celular sobreposto no canto — mesmo emblema de moeda já usado na
                oferta, agora também no hero. */}
            <div className="absolute -bottom-6 -right-3 w-[27%] min-w-[92px] max-w-[150px] sm:right-3">
              <div className="overflow-hidden rounded-[20%] border-[3px] border-graphite-dark bg-graphite-dark shadow-2xl ring-1 ring-white/10">
                <Image
                  src={`${basePath}/hero/radar-pro-moeda.webp`}
                  alt="Radar do Vendedor Rico PRO"
                  width={1254}
                  height={1254}
                  priority
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-xl">
          <CtaButton>
            Quero minha previsibilidade financeira (R$ 19,34/mês)
          </CtaButton>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-offwhite/70 sm:text-sm">
            <span className="inline-flex items-center gap-1.5">
              <Lock className="size-4 text-brand-orange" /> Acesso Imediato
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CloudUpload className="size-4 text-brand-orange" /> Backup Seguro
              na Nuvem
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="size-4 text-brand-orange" /> Garantia de 7
              Dias
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
