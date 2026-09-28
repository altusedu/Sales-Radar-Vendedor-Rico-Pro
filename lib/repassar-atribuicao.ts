// Leva o crédito do anúncio até o checkout da Eduzz.
//
// Quem chega por anúncio da Meta traz ?fbclid=... na URL. O checkout (sun.eduzz.com) é
// outro domínio: sem repasse, o pixel de lá não sabe de qual clique a venda veio. Com o
// fbclid na URL do checkout, o pixel da Meta instalado lá grava o _fbc e a Purchase sai
// atribuída à campanha. As UTMs vão junto (a Eduzz registra na fatura; o funil das
// planilhas usa).
//
// - Guarda os parâmetros em localStorage por 90 dias (validade do _fbc), para quem entra
//   por uma página e compra por outra do mesmo domínio (RVR ↔ PRO) ou volta depois.
//   Um clique novo em anúncio (URL com fbclid/utm) substitui o conjunto inteiro.
// - Ajusta os links da Eduzz ao carregar e, de novo, no clique (pega links renderizados
//   depois). Não sobrescreve parâmetro que o link já tenha.
// - Sem rede, sem espera; qualquer erro deixa o link como está.

const PARAMETROS = ['fbclid', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term']
const CHAVE = 'altus_atribuicao'
const VALIDADE_MS = 90 * 24 * 60 * 60 * 1000

function ehCheckoutEduzz(url: URL): boolean {
  return url.hostname === 'eduzz.com' || url.hostname.endsWith('.eduzz.com')
}

type Parametros = Record<string, string>

function lerDaUrl(): Parametros | null {
  const busca = new URLSearchParams(window.location.search)
  const encontrados: Parametros = {}
  PARAMETROS.forEach((p) => {
    const valor = busca.get(p)
    if (valor) encontrados[p] = valor
  })
  return Object.keys(encontrados).length ? encontrados : null
}

export function parametrosDeAtribuicao(): Parametros {
  const daUrl = lerDaUrl()
  try {
    if (daUrl) {
      window.localStorage.setItem(CHAVE, JSON.stringify({ parametros: daUrl, salvoEm: Date.now() }))
      return daUrl
    }
    const salvo = JSON.parse(window.localStorage.getItem(CHAVE) || 'null')
    if (salvo && Date.now() - salvo.salvoEm < VALIDADE_MS) return salvo.parametros
    if (salvo) window.localStorage.removeItem(CHAVE)
  } catch {
    // armazenamento bloqueado: vale só o que está na URL atual
  }
  return daUrl || {}
}

export function comAtribuicao(href: string, parametros: Parametros): string {
  try {
    const url = new URL(href, window.location.href)
    if (!ehCheckoutEduzz(url)) return href
    let mudou = false
    Object.entries(parametros).forEach(([nome, valor]) => {
      if (!url.searchParams.has(nome)) {
        url.searchParams.set(nome, valor)
        mudou = true
      }
    })
    return mudou ? url.toString() : href
  } catch {
    return href
  }
}

export function repassarAtribuicao(): () => void {
  const parametros = parametrosDeAtribuicao()
  if (!Object.keys(parametros).length) return () => {}

  const ajustar = (link: Element) => {
    const novo = comAtribuicao(link.getAttribute('href') || '', parametros)
    if (novo !== link.getAttribute('href')) link.setAttribute('href', novo)
  }
  document.querySelectorAll('a[href*="eduzz.com"]').forEach(ajustar)

  // Captura: roda antes do onClick dos botões e da navegação.
  const aoClicar = (evento: Event) => {
    const link = evento.target instanceof Element ? evento.target.closest('a[href*="eduzz.com"]') : null
    if (link) ajustar(link)
  }
  document.addEventListener('click', aoClicar, true)
  document.addEventListener('auxclick', aoClicar, true) // botão do meio / nova aba
  return () => {
    document.removeEventListener('click', aoClicar, true)
    document.removeEventListener('auxclick', aoClicar, true)
  }
}
