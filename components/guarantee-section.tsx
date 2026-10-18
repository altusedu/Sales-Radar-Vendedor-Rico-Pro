import Image from 'next/image'
import { ShieldCheck } from 'lucide-react'
import { basePath } from '@/lib/base-path'

export function GuaranteeSection() {
  return (
    <section className="bg-offwhite">
      <figure className="m-0 h-[240px] overflow-hidden min-[761px]:h-[clamp(280px,36vw,480px)]">
        <Image
          src={`${basePath}/vendedor-meta-batida.webp`}
          alt="Vendedor sorrindo no escritório, com um painel ao fundo mostrando 156% da meta do mês e bônus trimestral atingido"
          width={1400}
          height={1493}
          sizes="100vw"
          className="size-full object-cover object-[center_12%] [mask-image:linear-gradient(180deg,#000_55%,transparent)]"
        />
      </figure>
      <div className="relative mx-auto -mt-10 max-w-3xl px-4 pb-16 sm:pb-20 min-[761px]:-mt-[72px]">
        <div className="flex flex-col items-center gap-6 rounded-3xl border border-graphite/10 bg-white p-8 text-center shadow-sm sm:flex-row sm:text-left sm:p-10">
          <div className="flex size-20 shrink-0 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange">
            <ShieldCheck className="size-11" />
          </div>
          <div>
            <h2 className="text-xl font-extrabold tracking-tight text-graphite sm:text-2xl">
              Garantia Incondicional de 7 Dias
            </h2>
            <p className="mt-2 text-pretty text-base leading-relaxed text-graphite/80">
              Teste o Radar do Vendedor Rico por 7 dias. Se você não sentir clareza absoluta
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
