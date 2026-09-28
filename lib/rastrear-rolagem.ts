// Evento "RolagemPagina" do Meta Pixel: 25%, 50%, 75% e 100% da altura da página,
// cada marco uma única vez por sessão (sessionStorage), mesmo se a pessoa voltar pra
// cima ou recarregar. "Passou por X%" = a borda de baixo da tela chegou a X% da página.
//
// Sem custo pra rolagem: listener passivo, conta refeita no máximo a cada 250ms e
// removido quando os 4 marcos saírem. O fbq só enfileira — nunca espera a Meta.
// Retorna a função que para o rastreio (cleanup do useEffect).

const MARCOS = [25, 50, 75, 100]
const INTERVALO_MS = 250

type Fbq = (...args: unknown[]) => void

export function rastrearRolagem(): () => void {
  const chave = 'rolagem:' + window.location.pathname
  let enviados: number[] = []
  try {
    enviados = JSON.parse(window.sessionStorage.getItem(chave) || '[]')
  } catch {
    // aba anônima/armazenamento bloqueado: vale só enquanto a página estiver aberta
  }
  const faltam = () => MARCOS.filter((m) => !enviados.includes(m))
  if (!faltam().length) return () => {}

  let timer: ReturnType<typeof setTimeout> | null = null
  let ultimaVerificacao = 0

  function verificar() {
    timer = null
    ultimaVerificacao = Date.now()
    // Pixel ainda carregando: não marca nada como enviado; tenta na próxima rolagem.
    const fbq = (window as unknown as { fbq?: Fbq }).fbq
    if (typeof fbq !== 'function') return

    const total = document.documentElement.scrollHeight
    const alcance = window.scrollY + window.innerHeight
    const percentual = total > 0 ? (alcance / total) * 100 : 0
    const novos = faltam().filter((m) => percentual >= m || (m === 100 && total - alcance <= 2))
    if (!novos.length) return

    novos.forEach((m) => {
      enviados.push(m)
      fbq('trackCustom', 'RolagemPagina', { percent: m })
    })
    try {
      window.sessionStorage.setItem(chave, JSON.stringify(enviados))
    } catch {
      // ver acima
    }
    if (!faltam().length) parar()
  }

  function aoRolar() {
    if (timer !== null) return
    timer = setTimeout(verificar, Math.max(0, INTERVALO_MS - (Date.now() - ultimaVerificacao)))
  }

  function parar() {
    window.removeEventListener('scroll', aoRolar)
    if (timer !== null) clearTimeout(timer)
    timer = null
  }

  window.addEventListener('scroll', aoRolar, { passive: true })
  aoRolar() // página curta ou aberta já no meio (voltar/recarregar)
  return parar
}
