import { Check, X } from 'lucide-react'

export function AudienceFitSection() {
  return (
    <section className="bg-graphite-dark py-16 text-offwhite">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-pretty text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl">
          Isso é pra você. Ou não é. Vamos ser diretos.
        </h2>

        <div className="mt-10 grid gap-4 text-left sm:grid-cols-2">
          <div className="rounded-2xl border border-brand-orange/30 bg-brand-orange/5 p-6">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-brand-orange">
              O Radar PRO é pra você que:
            </h3>
            <ul className="space-y-3 text-sm leading-relaxed text-offwhite/90">
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 size-4 shrink-0 text-brand-orange" />
                Vive de comissão e sente a ansiedade de não saber quanto vai
                ganhar
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 size-4 shrink-0 text-brand-orange" />
                Já se esforça bastante, mas sente que trabalha no escuro, sem
                direção clara
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 size-4 shrink-0 text-brand-orange" />
                Quer parar de "achar" e passar a SABER, com números na mão,
                o que fazer HOJE MESMO
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-offwhite/50">
              Não é pra você que:
            </h3>
            <ul className="space-y-3 text-sm leading-relaxed text-offwhite/70">
              <li className="flex items-start gap-2">
                <X className="mt-0.5 size-4 shrink-0 text-offwhite/40" />
                Já tem um processo redondo e bate a meta todo mês sem esforço
              </li>
              <li className="flex items-start gap-2">
                <X className="mt-0.5 size-4 shrink-0 text-offwhite/40" />
                Não trabalha com vendas ou comissão variável
              </li>
              <li className="flex items-start gap-2">
                <X className="mt-0.5 size-4 shrink-0 text-offwhite/40" />
                Procura solução mágica sem lançar nenhum dado no sistema
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
