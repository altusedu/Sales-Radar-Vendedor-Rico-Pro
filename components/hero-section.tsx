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
        <span className="relative mx-auto mb-8 block w-[220px] overflow-hidden sm:w-[260px]">
          <Image
            src={`${basePath}/logo-radar-vendedor-rico-hero.webp`}
            alt="Radar do Vendedor Rico"
            width={600}
            height={211}
            priority
            className="block h-auto w-full"
          />
          <span aria-hidden="true" className="radar-varredura" />
        </span>

        <h1 className="mx-auto max-w-3xl text-pretty text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
          Meta não se bate dia 30:{' '}
          <span className="text-brand-orange">Se bate TODO DIA.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base font-bold leading-relaxed text-offwhite sm:text-lg">
          Saiba o que os vendedores estão fazendo para atingir salários mais
          altos sem ter que atender mais clientes por dia.
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-pretty text-base leading-relaxed text-offwhite/80 sm:text-lg">
          Saia do ciclo de incerteza e assuma o controle da sua comissão.
        </p>

        <div className="relative mx-auto mt-10 max-w-3xl">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 scale-90 rounded-full bg-brand-orange/30 blur-[80px]"
          />
          <Image
            src={`${basePath}/hero/hero-mockup.webp`}
            alt="Radar do Vendedor Rico exibido em notebook e celular"
            width={1536}
            height={1024}
            priority
            className="relative mx-auto w-full"
          />
        </div>

        <div className="mx-auto mt-10 max-w-xl">
          <CtaButton>
            Quero calcular minha comissão
          </CtaButton>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-offwhite/70 sm:text-sm">
            <span className="inline-flex items-center gap-1.5">
              <Lock className="size-4 text-brand-orange" /> Acesso Imediato
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CloudUpload className="size-4 text-brand-orange" /> Pagamento
              Único
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
