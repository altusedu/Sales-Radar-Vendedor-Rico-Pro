import Image from 'next/image'
import { Quote } from 'lucide-react'
import { basePath } from '@/lib/base-path'

const painQuotes = [
  'Queria tanto trocar de carro, mas meu salário muda todo mês e tenho medo de não conseguir pagar a parcela...',
  'Será que troco de área? Ganhar menos, mas ter a certeza de quanto vai cair na conta todo mês...',
  'Trabalho 10 horas por dia, dou desconto para fechar a venda e no final a minha comissão vem uma merreca.',
  'Chega dia 30 e bate aquela ansiedade. Meta tinha que ter um GPS pra ser mais fácil!',
]

export function PainSection() {
  return (
    <section className="bg-offwhite">
      {/* Mesmo encaixe da página do PRO: foto na largura toda, apagando para baixo, e o título
          subindo por cima da parte já apagada. */}
      <figure className="m-0 h-[240px] overflow-hidden min-[761px]:h-[clamp(280px,36vw,480px)]">
        <Image
          src={`${basePath}/vendedor-preocupado-fim-do-mes.webp`}
          alt="Vendedor à noite no escritório, com a mão na testa diante do notebook e de um painel que mostra só 32% da meta do mês"
          width={1214}
          height={1295}
          sizes="100vw"
          className="size-full object-cover object-[center_14%] [mask-image:linear-gradient(180deg,#000_55%,transparent)]"
        />
      </figure>
      <div className="relative mx-auto -mt-10 max-w-5xl px-4 pb-16 sm:pb-20 min-[761px]:-mt-[72px]">
        <h2 className="mx-auto max-w-2xl text-balance text-center text-2xl font-extrabold leading-tight tracking-tight text-graphite sm:text-3xl md:text-4xl">
          Você já se pegou fazendo alguma destas perguntas no fim do mês?
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {painQuotes.map((quote) => (
            <div
              key={quote}
              className="relative overflow-hidden rounded-2xl border border-graphite/10 bg-white p-6 shadow-sm"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 h-full w-1 bg-brand-orange"
              />
              <Quote className="mb-3 size-6 text-brand-orange" />
              <p className="text-pretty text-base leading-relaxed text-graphite/80">
                &ldquo;{quote}&rdquo;
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-graphite p-8 text-center sm:p-10">
          <p className="mx-auto max-w-3xl text-pretty text-lg font-medium leading-relaxed text-offwhite sm:text-xl">
            Vendas é uma das poucas profissões no mundo que permite ao
            profissional escolher{' '}
            <span className="text-brand-orange">o quanto quer ganhar.</span>{' '}
            Eu sei que você se esforça muito, o problema não é a sua capacidade,
            é a falta de um sistema que te ajude todos os dias a alcançar o que
            você quer.
          </p>
        </div>
      </div>
    </section>
  )
}
