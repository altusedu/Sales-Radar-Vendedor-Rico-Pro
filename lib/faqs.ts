// Perguntas do FAQ num arquivo à parte: a seção visível (componente de cliente) e a ficha
// JSON-LD do app/page.tsx (componente de servidor) leem a mesma lista, então as duas nunca
// divergem. Importar o array direto do faq-section.tsx no servidor não funciona por causa
// do 'use client'.
export const faqs = [
  {
    question: 'Consigo acessar o Radar PRO pelo celular?',
    answer:
      'Sim! O sistema é 100% mobile-first e funciona perfeitamente no celular, tablet ou computador. Você lança suas vendas direto do balcão, de qualquer lugar, sem instalar nada.',
  },
  {
    question: 'Meus dados ficam seguros?',
    answer:
      'Com certeza. Todos os seus lançamentos são criptografados e armazenados com backup seguro na nuvem, protegidos contra qualquer perda de informação.',
  },
  {
    question: 'Se eu trocar de celular, perco meu histórico?',
    answer:
      'Não. Como tudo é sincronizado na nuvem, basta entrar com a sua conta em qualquer dispositivo que todo o seu histórico de metas e comissões estará lá, intacto.',
  },
  {
    question: 'Como funciona a renovação da assinatura?',
    answer:
      'A licença é anual. Você paga R$ 187,00 à vista (ou 12x de R$ 19,34) e tem acesso completo por 12 meses. Avisamos com antecedência antes de qualquer renovação, sem surpresas.',
  },
  {
    question: 'Terei suporte se tiver dúvidas?',
    answer:
      'Sim. Nossa equipe do Grupo Altus Educacional oferece suporte para te ajudar a extrair o máximo do sistema e bater suas metas todos os dias.',
  },
]
