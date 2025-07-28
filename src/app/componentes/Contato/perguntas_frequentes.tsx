"use client"

import { MessageCircle, ChevronDown } from "lucide-react"
import { useState } from "react"

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const faqs = [
    {
      question: "Qual o horário de atendimento?",
      answer:
        "Atendemos de segunda a sexta das 8h às 18h e aos sábados das 8h às 12h. Nosso WhatsApp funciona 24h para emergências.",
    },
    {
      question: "Qual o prazo de garantia das baterias?",
      answer:
        "Todas as nossas baterias possuem garantia de 12 meses contra defeitos de fabricação. Algumas marcas premium oferecem até 18 meses de garantia.",
    },
    {
      question: "Fazem instalação no local?",
      answer:
        "Sim, nossa equipe técnica realiza a instalação gratuitamente em nosso estabelecimento. Para instalação domiciliar, consulte disponibilidade e taxas.",
    },
    {
      question: "Aceitam troca de baterias usadas?",
      answer:
        "Sim, aceitamos baterias usadas e oferecemos desconto na compra de uma nova. O valor varia conforme o estado da bateria usada.",
    },
    {
      question: "Quais marcas vocês trabalham?",
      answer:
        "Trabalhamos com as principais marcas do mercado: Moura, Heliar, Bosch, AC Delco, Johnson Controls e Varta.",
    },
    {
      question: "Fazem entrega?",
      answer: "Sim, fazemos entrega em toda a região de Itajubá e Pouso Alegre. Consulte taxas e prazos pelo WhatsApp.",
    },
  ]

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Perguntas <span className="text-red-500">Frequentes</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">Tire suas dúvidas sobre nossos produtos e serviços</p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <button
                className="w-full px-4 py-4 md:px-6 md:py-5 lg:px-8 lg:py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-red-500 transition-transform duration-300 flex-shrink-0 ${
                    openFaq === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openFaq === index && (
                <div className="px-8 pb-6">
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-red-600 via-red-700 to-red-800 rounded-3xl p-6 md:p-8 lg:p-12 shadow-xl">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            Ainda tem <span className="text-red-200">dúvidas</span>?
          </h3>
          <p className="text-lg text-red-100 mb-8 leading-relaxed max-w-2xl mx-auto">
            Entre em contato pelo WhatsApp e receba atendimento especializado hoje mesmo!
          </p>
          <a
            href="https://wa.me/5535988124321?text=Olá! Tenho algumas dúvidas sobre baterias."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-gray-100 text-gray-900 font-semibold px-6 md:px-8 py-3 md:py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center text-lg"
          >
            <MessageCircle className="mr-3 w-6 h-6" />
            Falar Agora
          </a>
        </div>
      </div>
    </section>
  )
}
