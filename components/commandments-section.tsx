import {
  CalendarCheck,
  DollarSign,
  Lightbulb,
  ShoppingBag,
  TrendingUp,
  Users,
  type LucideIcon,
} from 'lucide-react'

type Resultado = {
  icon: LucideIcon
  title: string
  description: string
}

const resultados: Resultado[] = [
  {
    icon: DollarSign,
    title: 'Meta de Comissão',
    description:
      'Quanto você precisa receber de comissão no mês para chegar no salário que definiu.',
  },
  {
    icon: TrendingUp,
    title: 'Faturamento Necessário',
    description:
      'O valor total que você precisa vender no mês para gerar essa comissão.',
  },
  {
    icon: ShoppingBag,
    title: 'Vendas por Dia',
    description:
      'Quantas vendas fazer por dia para a meta não acumular para o fim do mês.',
  },
  {
    icon: CalendarCheck,
    title: 'Atendimentos no Mês',
    description:
      'Quantos clientes você precisa abordar no mês, considerando os dias que vai trabalhar.',
  },
  {
    icon: Users,
    title: 'Atendimentos por Dia',
    description:
      'O número de abordagens de hoje. É só bater esse número todo dia.',
  },
  {
    icon: Lightbulb,
    title: 'Dicas e Fórmulas',
    description:
      'Entenda como cada número é calculado e o que fazer para melhorar seus resultados.',
  },
]

export function CommandmentsSection() {
  return (
    <section className="bg-offwhite text-graphite">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full border border-brand-orange/40 bg-brand-orange/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-orange sm:text-xs">
            Como funciona
          </span>
          <h2 className="mx-auto mt-5 max-w-2xl text-balance text-2xl font-extrabold leading-tight tracking-tight text-graphite sm:text-3xl md:text-4xl">
            Sua meta do mês vira o número de hoje
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-graphite/70">
            Você informa quanto quer ganhar, sua comissão média, seu ticket
            médio e quantos dias vai trabalhar. O Radar devolve, na hora:
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {resultados.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex gap-4 rounded-2xl border border-graphite/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
                <Icon className="size-6" />
              </span>
              <div>
                <h3 className="text-base font-bold leading-snug text-graphite sm:text-lg">
                  {title}
                </h3>
                <p className="mt-1.5 text-pretty text-sm leading-relaxed text-graphite/70">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm font-semibold text-graphite/70">
          Sem fórmula, sem conta de cabeça. Mudou um número, o resultado
          atualiza na hora.
        </p>
      </div>
    </section>
  )
}
