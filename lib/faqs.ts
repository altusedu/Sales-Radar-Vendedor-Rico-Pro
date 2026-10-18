// Perguntas do FAQ num arquivo à parte: a seção visível (componente de cliente) e a ficha
// JSON-LD do app/page.tsx (componente de servidor) leem a mesma lista, então as duas nunca
// divergem. Importar o array direto do faq-section.tsx no servidor não funciona por causa
// do 'use client'.
export const faqs = [
  {
    question: 'O que é o Radar do Vendedor Rico?',
    answer:
      'É uma calculadora de metas para vendedor comissionado. Você informa quanto quer ganhar, sua comissão média, seu ticket médio e os dias que vai trabalhar, e ele mostra quanto precisa vender e quantos clientes precisa atender por dia e no mês.',
  },
  {
    question: 'Funciona no celular?',
    answer:
      'Sim. Você acessa pelo navegador do celular, do tablet ou do computador, sem instalar nada, e vê o resultado assim que digita os números.',
  },
  {
    question: 'Tem mensalidade?',
    answer:
      'Não. É um pagamento único de R$ 47, sem mensalidade e sem renovação automática.',
  },
  {
    question: 'Preciso lançar minhas vendas todo dia?',
    answer:
      'Não. Você coloca a sua meta e os seus números, e o Radar mostra o caminho. Mudou alguma coisa no mês, como a comissão ou os dias de trabalho, é só atualizar o número que o resultado se ajusta na hora.',
  },
  {
    question: 'E se eu não gostar?',
    answer:
      'Você tem garantia incondicional de 7 dias. Se não fizer sentido para você, devolvemos 100% do valor, sem letras miúdas.',
  },
  {
    question: 'Terei suporte se tiver dúvidas?',
    answer:
      'Sim. A equipe do Grupo Altus Educacional oferece suporte para você tirar o máximo da calculadora e bater suas metas.',
  },
]
