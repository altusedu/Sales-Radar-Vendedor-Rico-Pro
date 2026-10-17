import { faqs } from '@/lib/faqs'

// Ficha técnica (JSON-LD) da página: diz ao Google e às IAs, sem ambiguidade, o que é o produto,
// quanto custa e quem vende. O produto usa o mesmo @id da página /radar-vendedor-rico-pro (é o
// mesmo RVR PRO), e a organização e o Rafael usam os mesmos @id da home e da VMN.
const site = 'https://www.altusedu.com.br'
const pagina = `${site}/radar-vendedor-rico`
const produto = `${site}/radar-vendedor-rico-pro`

export const checkoutRadarPro = 'https://sun.eduzz.com/Z0B1R3579A'

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
        '@id': `${produto}#software`,
        name: 'Radar do Vendedor Rico PRO',
        alternateName: 'RVR PRO',
        sameAs: ['https://www.instagram.com/vendedor.rico/'],
        description:
          'Sistema de gestão de metas e vendas para vendedores comissionados. Calcula a meta diária pelos dias úteis que restam, registra as vendas do dia, acompanha comissões pendentes, simula descontos antes de negociar e guarda o histórico de cada mês com backup na nuvem.',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web (celular, tablet e computador)',
        inLanguage: 'pt-BR',
        url: produto,
        publisher: { '@id': `${site}/#organizacao` },
        offers: {
          '@type': 'Offer',
          price: '187.00',
          priceCurrency: 'BRL',
          description: 'Licença anual: R$ 187 à vista ou 12x de R$ 19,34. Garantia incondicional de 7 dias.',
          availability: 'https://schema.org/InStock',
          url: checkoutRadarPro,
          seller: { '@id': `${site}/#organizacao` },
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${pagina}#perguntas`,
        url: pagina,
        about: { '@id': `${produto}#software` },
        mainEntity: faqs.map(({ question, answer }) => ({
          '@type': 'Question',
          name: question,
          acceptedAnswer: { '@type': 'Answer', text: answer },
        })),
      },
    ],
  }
}
