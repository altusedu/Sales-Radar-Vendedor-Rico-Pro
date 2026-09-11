import {
  Activity,
  CloudUpload,
  Gauge,
  History,
  Rocket,
  Target,
  Wallet,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Commandment = {
  icon: LucideIcon
  title: string
  description: string
}

const commandments: Commandment[] = [
  {
    icon: Activity,
    title: 'Lançamento e Rastreamento em Tempo Real',
    description:
      'Lance suas vendas, comissões confirmadas e pendentes em segundos com cálculo automático de Ticket Médio e Taxa de Conversão.',
  },
  {
    icon: Target,
    title: 'Mapeador de Metas Diárias',
    description:
      'Descubra quantos atendimentos e fechamentos precisa fazer por dia considerando apenas os dias úteis restantes do mês.',
  },
  {
    icon: Wallet,
    title: 'Gestão de Comissões Pendentes',
    description:
      'Acompanhe o que tem a receber para garantir que nenhum centavo fique para trás.',
  },
  {
    icon: Gauge,
    title: 'Simulador Anti-Prejuízo de Desconto',
    description:
      'Veja na tela exatamente quanto perde na sua comissão antes de conceder qualquer desconto ao cliente.',
  },
  {
    icon: History,
    title: 'Fechamento de Mês e Histórico',
    description:
      'Guarde o histórico do mês encerrado para analisar padrões e criar estratégias de novas vendas com os mesmos clientes.',
  },
  {
    icon: Rocket,
    title: 'Acelerador de Comissões',
    description:
      'Dicas táticas e práticas integradas para subir seu Ticket Médio e fechar mais vendas.',
  },
  {
    icon: CloudUpload,
    title: 'Backup Seguro na Nuvem',
    description:
      'Seus dados sincronizados e protegidos para você acessar de qualquer dispositivo sem perder nada.',
  },
]

export function CommandmentsSection() {
  return (
    <section className="bg-graphite text-offwhite">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full border border-brand-orange/40 bg-brand-orange/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-orange sm:text-xs">
            Os 7 Mandamentos do Sistema PRO
          </span>
          <h2 className="mx-auto mt-5 max-w-2xl text-balance text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl md:text-4xl">
            Tudo que você precisa para transformar esforço em previsibilidade
          </h2>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {commandments.map(({ icon: Icon, title, description }, index) => (
            <div
              key={title}
              className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-brand-orange/40"
            >
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-orange/15 text-brand-orange">
                <Icon className="size-6" />
              </div>
              <div>
                <h3 className="text-base font-bold leading-snug sm:text-lg">
                  {index + 1}. {title}
                </h3>
                <p className="mt-1.5 text-pretty text-sm leading-relaxed text-offwhite/70">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
