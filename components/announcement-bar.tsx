export function AnnouncementBar() {
  return (
    <div className="bg-graphite-dark text-offwhite">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-2 px-4 py-2.5 text-center sm:flex-row sm:gap-3">
        <span className="animate-pulse-badge inline-flex items-center rounded-full bg-brand-orange px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white sm:text-xs">
          Sistema de Gestão para Vendedores
        </span>
        <p className="text-xs font-medium text-offwhite/90 sm:text-sm">
          Assuma o controle do seu salário por menos de{' '}
          <span className="font-bold text-brand-orange">R$ 0,51 por dia.</span>
        </p>
      </div>
    </div>
  )
}
