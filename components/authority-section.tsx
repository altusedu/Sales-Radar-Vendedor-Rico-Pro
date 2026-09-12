import Image from 'next/image'
import { basePath } from '@/lib/base-path'

export function AuthoritySection() {
  return (
    <section className="bg-offwhite py-16 text-graphite">
      <div className="mx-auto max-w-3xl px-4">
        <span className="mx-auto flex w-fit items-center rounded-full border border-brand-orange/40 bg-brand-orange/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-orange sm:text-xs">
          Quem criou isso
        </span>

        <div className="mt-8 flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:gap-8">
          <Image
            src={`${basePath}/rafael-pires.jpg`}
            alt="Rafael Pires"
            width={140}
            height={140}
            className="size-32 shrink-0 rounded-2xl object-cover ring-1 ring-graphite/10 sm:size-36"
          />

          <div className="text-center sm:text-left">
            <h3 className="text-lg font-extrabold text-graphite sm:text-xl">
              Rafael Pires
            </h3>
            <p className="text-sm font-semibold text-brand-orange">
              Gerente Nacional de Vendas — 15 anos de experiência comercial
            </p>

            <p className="mt-4 text-pretty text-base leading-relaxed text-graphite/80">
              Eu já vivi na pele a insegurança de não saber quanto ia cair na
              minha conta no fim do mês. Hoje lidero um time de mais de{' '}
              <strong className="text-graphite">100 vendedores</strong>, em{' '}
              <strong className="text-graphite">30+ lojas</strong>, espalhados
              por <strong className="text-graphite">18 estados</strong> do
              Brasil — e vi essa mesma angústia se repetir, um vendedor atrás
              do outro.
            </p>

            <p className="mt-3 text-pretty text-base leading-relaxed text-graphite/80">
              Percebi que o problema nunca foi falta de esforço. Era falta de
              um sistema simples que mostrasse, todo santo dia, exatamente o
              que fazer para bater a meta. O Radar do Vendedor Rico PRO nasceu
              dessa constatação — testado na prática, com gente de verdade,
              não numa planilha teórica.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
