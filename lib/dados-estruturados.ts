import { faqs } from '@/lib/faqs'

// Ficha técnica (JSON-LD) da página: diz ao Google e às IAs, sem ambiguidade, o que é o produto,
// quanto custa e quem vende. O produto tem @id próprio (não é o mesmo do PRO, que mora em
// /radar-vendedor-rico-pro), e a organização usa o mesmo @id da home e da VMN.
const site = 'https://www.altusedu.com.br'
const pagina = `${site}/radar-vendedor-rico`

export const checkoutRadar = 'https://sun.eduzz.com/7WXG86GD0A'

export function dadosEstruturados() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${site}/#organizacao`,
        name: 'Grupo Altus Educacional',
        url: `${site}/`,
      },
      {
        '@type': 'SoftwareApplication',
        '@id': `${pagina}#software`,
        name: 'Radar do Vendedor Rico',
        alternateName: 'RVR',
        sameAs: ['https://www.instagram.com/vendedor.rico/'],
        description:
          'Calculadora de metas para vendedores comissionados. A partir do salário desejado, da comissão média, do ticket médio e dos dias de trabalho, mostra a meta de comissão e de faturamento do mês e quantas vendas e atendimentos fazer por dia.',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web (celular, tablet e computador)',
        inLanguage: 'pt-BR',
        url: pagina,
        publisher: { '@id': `${site}/#organizacao` },
        offers: {
          '@type': 'Offer',
          price: '47.00',
          priceCurrency: 'BRL',
          description: 'Pagamento único de R$ 47, sem mensalidade. Garantia incondicional de 7 dias.',
          availability: 'https://schema.org/InStock',
          url: checkoutRadar,
          seller: { '@id': `${site}/#organizacao` },
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${pagina}#perguntas`,
        url: pagina,
        about: { '@id': `${pagina}#software` },
        mainEntity: faqs.map(({ question, answer }) => ({
          '@type': 'Question',
          name: question,
          acceptedAnswer: { '@type': 'Answer', text: answer },
        })),
      },
    ],
  }
}
