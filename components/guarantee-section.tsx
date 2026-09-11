import { ShieldCheck } from 'lucide-react'

export function GuaranteeSection() {
  return (
    <section className="bg-offwhite">
      <div className="mx-auto max-w-3xl px-4 pb-16 sm:pb-20">
        <div className="flex flex-col items-center gap-6 rounded-3xl border border-graphite/10 bg-white p-8 text-center shadow-sm sm:flex-row sm:text-left sm:p-10">
          <div className="flex size-20 shrink-0 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange">
            <ShieldCheck className="size-11" />
          </div>
          <div>
            <h2 className="text-xl font-extrabold tracking-tight text-graphite sm:text-2xl">
              Garantia Incondicional de 7 Dias
            </h2>
            <p className="mt-2 text-pretty text-base leading-relaxed text-graphite/80">
              Teste o Radar PRO por 7 dias. Se você não sentir clareza absoluta
              sobre suas metas e o seu salário em 1 semana, devolveremos 100% do
              seu dinheiro.{' '}
              <span className="font-semibold text-graphite">
                Sem letras miúdas.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
