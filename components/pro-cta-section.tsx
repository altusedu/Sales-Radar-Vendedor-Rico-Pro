'use client'

const paginaPro = 'https://www.altusedu.com.br/radar-vendedor-rico-pro'

export function ProCtaSection() {
  return (
    <section className="bg-offwhite">
      <div className="mx-auto max-w-3xl px-4 pb-24 sm:pb-28">
        <div className="rounded-2xl border-2 border-brand-orange bg-gradient-to-br from-brand-orange/15 to-blue-500/15 p-7 text-center sm:p-8">
          <h2 className="text-xl font-extrabold tracking-tight text-brand-orange sm:text-2xl">
            Quer automatizar todos esses cálculos?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-pretty text-sm leading-relaxed text-graphite/80 sm:text-base">
            Com o <strong className="text-graphite">Radar do Vendedor Rico PRO</strong>,
            você lança suas vendas e o mês se atualiza sozinho. Ele acompanha
            suas comissões pendentes, simula descontos antes de negociar e
            guarda o histórico de cada mês, por 12x de R$ 19,34 ou R$ 187 por
            ano.
          </p>
          <a
            href={paginaPro}
            onClick={() =>
              window.fbq?.('trackCustom', 'CliqueProduto', {
                produto: 'radar-vendedor-rico-pro',
              })
            }
            className="mt-6 inline-block rounded-lg bg-brand-orange px-7 py-3.5 text-sm font-extrabold uppercase tracking-wide text-white shadow-[0_4px_15px_rgba(255,85,0,0.4)] transition-opacity hover:opacity-90 sm:text-base"
          >
            Quero conhecer o Radar PRO
          </a>
        </div>
      </div>
    </section>
  )
}
