import Image from 'next/image'
import { basePath } from '@/lib/base-path'

export function SiteFooter() {
  return (
    <footer className="bg-graphite-dark text-offwhite/70">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 py-10 text-center">
        <Image
          src={`${basePath}/logo-altus.jpg`}
          alt="Grupo Altus Educacional"
          width={56}
          height={56}
          className="size-14 rounded-lg object-cover ring-1 ring-white/10"
        />
        <p className="text-sm font-semibold text-offwhite">
          Grupo Altus Educacional
        </p>
        <p className="max-w-md text-pretty text-xs leading-relaxed">
          Radar do Vendedor Rico PRO — o sistema de gestão que coloca
          previsibilidade financeira no bolso de quem vive de vendas.
        </p>
        <p className="mt-2 text-xs text-offwhite/40">
          © {new Date().getFullYear()} Grupo Altus Educacional. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  )
}
