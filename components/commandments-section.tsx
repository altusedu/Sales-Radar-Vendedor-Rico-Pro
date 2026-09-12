import Image from 'next/image'
import { basePath } from '@/lib/base-path'

type Commandment = {
  image: string
  title: string
  description: string
}

const commandments: Commandment[] = [
  {
    image: 'box-rastreamento.png',
    title: 'Lançamento e Rastreamento em Tempo Real',
    description:
      'Lance suas vendas, comissões confirmadas e pendentes em segundos com cálculo automático de Ticket Médio e Taxa de Conversão.',
  },
  {
    image: 'box-metas.png',
    title: 'Mapeador de Metas Diárias',
    description:
      'Descubra quantos atendimentos e fechamentos precisa fazer por dia considerando apenas os dias úteis restantes do mês.',
  },
  {
    image: 'box-comissoes.png',
    title: 'Gestão de Comissões Pendentes',
    description:
      'Acompanhe o que tem a receber para garantir que nenhum centavo fique para trás.',
  },
  {
    image: 'box-desconto.png',
    title: 'Simulador Anti-Prejuízo de Desconto',
    description:
      'Veja na tela exatamente quanto perde na sua comissão antes de conceder qualquer desconto ao cliente.',
  },
  {
    image: 'box-historico.png',
    title: 'Fechamento de Mês e Histórico',
    description:
      'Guarde o histórico do mês encerrado para analisar padrões e criar estratégias de novas vendas com os mesmos clientes.',
  },
  {
    image: 'box-acelerador.png',
    title: 'Acelerador de Comissões',
    description:
      'Dicas táticas e práticas integradas para subir seu Ticket Médio e fechar mais vendas.',
  },
  {
    image: 'box-backup.png',
    title: 'Backup Seguro na Nuvem',
    description:
      'Seus dados sincronizados e protegidos para você acessar de qualquer dispositivo sem perder nada.',
  },
]

export function CommandmentsSection() {
  return (
    <section className="bg-offwhite text-graphite">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full border border-brand-orange/40 bg-brand-orange/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-orange sm:text-xs">
            Os 7 Mandamentos do Sistema PRO
          </span>
          <h2 className="mx-auto mt-5 max-w-2xl text-balance text-2xl font-extrabold leading-tight tracking-tight text-graphite sm:text-3xl md:text-4xl">
            Tudo que você precisa para transformar esforço em previsibilidade
          </h2>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {commandments.map(({ image, title, description }, index) => (
            <div
              key={title}
              className="flex gap-4 rounded-2xl border border-graphite/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <Image
                src={`${basePath}/${image}`}
                alt={title}
                width={96}
                height={96}
                className="size-20 shrink-0 rounded-lg object-contain sm:size-24"
              />
              <div>
                <h3 className="text-base font-bold leading-snug text-graphite sm:text-lg">
                  {index + 1}. {title}
                </h3>
                <p className="mt-1.5 text-pretty text-sm leading-relaxed text-graphite/70">
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
