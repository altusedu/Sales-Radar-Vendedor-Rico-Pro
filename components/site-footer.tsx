import Image from 'next/image'
import { basePath } from '@/lib/base-path'

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-graphite-dark text-offwhite/80">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-6 gap-y-6 px-4 pt-8 md:flex-nowrap">
        <div className="flex w-full items-center gap-4 md:w-auto">
          <Image
            src={`${basePath}/logo-radar-vendedor-rico-pro-assinatura.webp`}
            alt=""
            width={360}
            height={118}
            className="h-auto w-[140px] flex-none sm:w-[180px]"
          />
          <p className="grid gap-1 md:max-w-[340px]">
            <strong className="text-[13px] font-semibold text-offwhite">
              Radar do Vendedor Rico PRO
            </strong>
            <span className="text-xs leading-snug text-offwhite/55">
              O sistema de gestão que coloca previsibilidade financeira no bolso
              de quem vive de vendas.
            </span>
          </p>
        </div>
        <div className="flex w-full flex-wrap items-center justify-between gap-x-6 gap-y-4 md:ml-auto md:w-auto md:flex-nowrap">
          <a
            href="https://www.altusedu.com.br/"
            className="inline-flex w-full items-center gap-3 text-[13px] font-semibold transition-colors hover:text-brand-orange md:w-auto"
          >
            <Image
              src={`${basePath}/logo-grupo-altus.webp`}
              alt=""
              width={300}
              height={253}
              className="h-auto w-16 flex-none"
            />
            <span className="grid gap-1">
              <span>Grupo Altus Educacional</span>
              <small className="text-xs font-normal leading-snug text-offwhite/55 md:max-w-[230px]">
                Escola de vendas e gestão para empresas de alta performance
              </small>
            </span>
          </a>
          <a
            href="#inicio"
            className="whitespace-nowrap text-[13px] transition-colors hover:text-brand-orange"
          >
            Voltar ao início ↑
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-5xl px-4 pb-28 sm:pb-10">
        <p className="mt-6 border-t border-white/10 pt-4 text-center text-xs text-offwhite/45">
          © 2026 Grupo Altus Educacional. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
