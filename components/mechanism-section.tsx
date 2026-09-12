import { Ban, ArrowRight, Zap } from 'lucide-react'

export function MechanismSection() {
  return (
    <section className="relative overflow-hidden bg-graphite-dark py-16 text-offwhite">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-orange/10 blur-[100px]"
      />
      <div className="relative mx-auto max-w-3xl px-4 text-center">
        <span className="inline-flex items-center rounded-full border border-brand-orange/40 bg-brand-orange/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-orange sm:text-xs">
          Presta atenção nisso
        </span>

        <h2 className="mx-auto mt-6 max-w-2xl text-pretty text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl md:text-4xl">
          Seu salário não depende de sorte.{' '}
          <span className="text-brand-orange">Depende de 2 números</span> — e
          o Radar PRO já sabe quais são.
        </h2>

        <div className="mx-auto mt-10 flex flex-col gap-4 text-left sm:mt-12">
          <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
            <Ban className="mt-0.5 size-6 shrink-0 text-offwhite/50" />
            <p className="text-pretty text-base leading-relaxed text-offwhite/80 sm:text-lg">
              Todo vendedor acha que, pra ganhar mais, precisa atender mais
              gente. Só que o dia só tem 24 horas — e ninguém aguenta esse
              ritmo pra sempre.
            </p>
          </div>

          <div className="flex items-start gap-4 rounded-2xl border border-brand-orange/30 bg-brand-orange/5 p-5">
            <Zap className="mt-0.5 size-6 shrink-0 text-brand-orange" />
            <p className="text-pretty text-base leading-relaxed text-offwhite sm:text-lg">
              O salário dos sonhos não vem de correr mais. Vem de vender
              melhor pra quem já está na sua frente.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-xl rounded-2xl bg-brand-orange/10 p-6 sm:mt-12 sm:p-8">
          <p className="text-pretty text-base font-semibold leading-relaxed text-offwhite sm:text-lg">
            Esquece a conta. O Radar PRO já calculou tudo por você, todo santo
            dia.
          </p>
          <p className="mt-3 text-pretty text-xl font-extrabold uppercase leading-tight tracking-tight text-brand-orange sm:text-2xl">
            Só abre o app e{' '}
            <span className="whitespace-nowrap">exe-cu-ta.</span>
          </p>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-sm font-semibold text-offwhite/60">
          Veja como isso funciona na prática
          <ArrowRight className="size-4 text-brand-orange" />
        </div>
      </div>
    </section>
  )
}
