"use client"
import DescubraBateriaBanner from "../componentes/Descubra_Bateria/descubra-bateria-banner"
import { Construction, Clock, MessageCircle, Phone } from "lucide-react"

export default function DescubraSuaBateriaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DescubraBateriaBanner />

      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* Aviso de Ferramenta em Desenvolvimento */}
        <section className="mb-16">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Header com ícone */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-8 text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Construction className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Ferramenta em Desenvolvimento</h2>
              <p className="text-orange-100 text-lg">Estamos trabalhando para trazer a melhor experiência para você</p>
            </div>

            {/* Conteúdo principal */}
            <div className="p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-6">
                  <Clock className="w-8 h-8 text-orange-500 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Em Breve</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                  Nossa ferramenta "Descubra sua Bateria" está sendo desenvolvida para oferecer a você uma experiência
                  ainda mais completa e precisa na busca pela bateria ideal para seu veículo.
                </p>
              </div>

              {/* Recursos que estarão disponíveis */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-50 rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Busca Inteligente</h4>
                  <p className="text-gray-600 text-sm">Sistema avançado de compatibilidade por marca, modelo e ano</p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Resultados Instantâneos</h4>
                  <p className="text-gray-600 text-sm">Encontre sua bateria em segundos com especificações completas</p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Comparação Detalhada</h4>
                  <p className="text-gray-600 text-sm">
                    Compare diferentes opções e escolha a melhor para suas necessidades
                  </p>
                </div>
              </div>

              {/* Enquanto isso... */}
              <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-2xl p-8 border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  Enquanto isso, estamos aqui para ajudar!
                </h3>
                <p className="text-gray-700 text-center mb-6">
                  Nossa equipe especializada está pronta para encontrar a bateria perfeita para seu veículo. Entre em
                  contato conosco e receba atendimento personalizado.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://wa.me/5535988124321?text=Olá! Preciso de ajuda para encontrar a bateria ideal para meu veículo."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center justify-center"
                  >
                    <MessageCircle className="mr-2 w-5 h-5" />
                    Falar no WhatsApp
                  </a>

                  <a
                    href="tel:+553536220282"
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center justify-center"
                  >
                    <Phone className="mr-2 w-5 h-5" />
                    Ligar Agora
                  </a>

                  <a
                    href="/produtos"
                    className="bg-gray-600 hover:bg-gray-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center justify-center"
                  >
                    Ver Produtos
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Como Funcionará */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Como Funcionará</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Quando estiver pronta, nossa ferramenta oferecerá uma experiência simples e intuitiva
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Selecione seu veículo</h3>
              <p className="text-gray-600 leading-relaxed">
                Escolha a marca, modelo e ano do seu carro em campos inteligentes e atualizados
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Resultados instantâneos</h3>
              <p className="text-gray-600 leading-relaxed">
                Veja todas as baterias compatíveis com especificações técnicas completas e atualizadas
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Compre com confiança</h3>
              <p className="text-gray-600 leading-relaxed">
                Entre em contato direto com nossa equipe ou encontre a revenda mais próxima
              </p>
            </div>
          </div>
        </section>

        {/* Newsletter para avisar quando estiver pronta */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Seja o primeiro a saber!</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Deixe seu contato e te avisaremos assim que a ferramenta estiver disponível. Você será um dos primeiros a
              experimentar essa novidade!
            </p>

            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="flex-1 px-4 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
                  Quero ser avisado
                </button>
              </div>
              <p className="text-gray-400 text-sm mt-3">
                Não enviamos spam. Apenas o aviso quando a ferramenta estiver pronta.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
