'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const faqs = [
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

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="bg-offwhite">
      <div className="mx-auto max-w-3xl px-4 pb-24 sm:pb-28">
        <h2 className="text-center text-2xl font-extrabold tracking-tight text-graphite sm:text-3xl">
          Perguntas Frequentes
        </h2>

        <div className="mt-8 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-graphite/10 bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-base font-semibold text-graphite">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      'size-5 shrink-0 text-brand-orange transition-transform',
                      isOpen && 'rotate-180',
                    )}
                  />
                </button>
                <div
                  className={cn(
                    'grid transition-all duration-300 ease-out',
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0',
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-pretty text-sm leading-relaxed text-graphite/75">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
