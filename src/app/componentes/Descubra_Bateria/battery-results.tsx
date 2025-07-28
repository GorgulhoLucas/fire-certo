"use client"

import Image from "next/image"
import { MessageCircle, Phone, Battery } from "lucide-react"

interface BateriaCompativel {
  codigo: string
  imagem: string
  dimensoes: string
  capacidade_c20?: string
  capacidade_c10?: string
  polaridade?: string
  cca_menos_18?: string
  ca_mais_25?: string
  rc?: string
  garantia: string
  tensao: string
  terminal?: string
  peso: string
  manutencao?: string
  categoria: string
  modelo: string
}

interface BatteryResultsProps {
  baterias: BateriaCompativel[]
  loading: boolean
  pesquisaRealizada: boolean
  veiculo: string
}

export default function BatteryResults({ baterias, loading, pesquisaRealizada, veiculo }: BatteryResultsProps) {
  // Função para formatar nome da propriedade
  const formatPropertyName = (key: string) => {
    const propertyNames: { [key: string]: string } = {
      dimensoes: "DIMENSÕES",
      capacidade_c20: "CAPACIDADE C20",
      capacidade_c10: "CAPACIDADE C10",
      polaridade: "POLARIDADE",
      cca_menos_18: "CCA (-18°C)",
      ca_mais_25: "CA (+25°C)",
      rc: "RESERVA (RC)",
      garantia: "GARANTIA",
      tensao: "TENSÃO",
      terminal: "TIPO DE TERMINAL",
      peso: "PESO",
      manutencao: "MANUTENÇÃO",
    }
    return propertyNames[key] || key.toUpperCase()
  }

  // Propriedades principais para exibir nos cards
  const getMainProperties = (bateria: BateriaCompativel) => {
    const mainProps = []

    if (bateria.dimensoes) mainProps.push({ key: "dimensoes", value: bateria.dimensoes })
    if (bateria.capacidade_c20) mainProps.push({ key: "capacidade_c20", value: bateria.capacidade_c20 })
    if (bateria.capacidade_c10) mainProps.push({ key: "capacidade_c10", value: bateria.capacidade_c10 })
    if (bateria.polaridade) mainProps.push({ key: "polaridade", value: bateria.polaridade })
    if (bateria.cca_menos_18) mainProps.push({ key: "cca_menos_18", value: bateria.cca_menos_18 })
    if (bateria.ca_mais_25) mainProps.push({ key: "ca_mais_25", value: bateria.ca_mais_25 })
    if (bateria.rc) mainProps.push({ key: "rc", value: bateria.rc })
    if (bateria.garantia) mainProps.push({ key: "garantia", value: bateria.garantia })
    if (bateria.tensao) mainProps.push({ key: "tensao", value: bateria.tensao })
    if (bateria.terminal) mainProps.push({ key: "terminal", value: bateria.terminal })
    if (bateria.peso) mainProps.push({ key: "peso", value: bateria.peso })

    return mainProps
  }

  // Loading state
  if (loading) {
    return (
      <section className="mb-16">
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-red-600 mx-auto mb-6"></div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Buscando baterias compatíveis...</h3>
            <p className="text-gray-600">Aguarde enquanto consultamos nosso banco de dados</p>
          </div>
        </div>
      </section>
    )
  }

  // Não mostrar nada se não foi feita pesquisa
  if (!pesquisaRealizada) {
    return null
  }

  // Nenhum resultado encontrado
  if (baterias.length === 0) {
    return (
      <section className="mb-16">
        <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Battery className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Nenhuma bateria encontrada</h3>
          <p className="text-gray-600 mb-6">
            Não encontramos baterias compatíveis para <strong>{veiculo}</strong> em nosso banco de dados.
          </p>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg mb-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-yellow-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  <strong>Não se preocupe!</strong> Nossa equipe pode ajudar você a encontrar a bateria ideal para seu
                  veículo.
                </p>
              </div>
            </div>
          </div>
          <a
            href="https://wa.me/5535988124321?text=Olá! Não encontrei bateria compatível para meu veículo no site. Podem me ajudar?"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <MessageCircle className="mr-2 w-5 h-5" />
            Falar com Especialista
          </a>
        </div>
      </section>
    )
  }

  // Resultados encontrados
  return (
    <section className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Baterias Compatíveis com seu <span className="text-red-600">{veiculo}</span>
        </h2>
        <p className="text-lg text-gray-600">
          Encontramos <strong>{baterias.length}</strong> bateria{baterias.length !== 1 ? "s" : ""} compatível
          {baterias.length !== 1 ? "is" : ""} com seu veículo
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {baterias.map((bateria, index) => {
          const mainProperties = getMainProperties(bateria)

          return (
            <div
              key={`${bateria.codigo}-${index}`}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Header com imagem e código */}
              <div className="relative bg-gradient-to-r from-gray-800 to-gray-900 p-6">
                <div className="flex items-center justify-between">
                  <div className="relative w-24 h-16">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qzmKGbWYI6fxYJRFCmy0EgfCv2seGS.png"
                      alt={bateria.codigo}
                      fill
                      className="object-contain"
                      sizes="96px"
                    />
                  </div>
                  <div className="bg-gray-700 px-4 py-2 rounded-lg">
                    <h3 className="text-white font-bold text-lg">{bateria.codigo}</h3>
                  </div>
                </div>
              </div>

              {/* Tabela de especificações */}
              <div className="p-6">
                <div className="space-y-0 border border-gray-200 rounded-lg overflow-hidden">
                  {mainProperties.map((prop, index) => (
                    <div key={prop.key} className={`grid grid-cols-2 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                      <div className="px-4 py-3 font-semibold text-gray-900 text-sm border-r border-gray-200">
                        {formatPropertyName(prop.key)}
                      </div>
                      <div className="px-4 py-3 text-gray-700 text-sm font-medium">{prop.value}</div>
                    </div>
                  ))}

                  {/* Footer com tipo de manutenção */}
                  {bateria.manutencao && (
                    <div className="bg-green-50 px-4 py-3 text-center">
                      <span className="text-green-800 font-semibold text-sm">{bateria.manutencao}</span>
                    </div>
                  )}
                </div>

                {/* Botões de ação */}
                <div className="mt-6 space-y-3">
                  <a
                    href={`https://wa.me/5535988124321?text=Olá! Tenho interesse na bateria ${bateria.codigo} para meu ${veiculo}. Podem me passar mais informações?`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center justify-center text-sm"
                  >
                    <MessageCircle className="mr-2 w-4 h-4" />
                    Consultar no WhatsApp
                  </a>
                  <a
                    href="tel:+553536220282"
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center justify-center text-sm"
                  >
                    <Phone className="mr-2 w-4 h-4" />
                    Ligar Agora
                  </a>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* CTA adicional */}
      <div className="mt-12 bg-gradient-to-r from-red-600 via-red-700 to-red-800 rounded-3xl p-8 text-center text-white">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">Precisa de mais informações?</h3>
        <p className="text-lg text-red-100 mb-6">
          Nossa equipe técnica está pronta para esclarecer todas as suas dúvidas sobre instalação e compatibilidade.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/5535988124321?text=Olá! Preciso de orientação técnica sobre baterias para meu veículo."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-gray-100 text-gray-900 font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center justify-center"
          >
            <MessageCircle className="mr-2 w-5 h-5" />
            Suporte Técnico
          </a>
          <a
            href="/contato"
            className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
          >
            Entre em Contato
          </a>
        </div>
      </div>
    </section>
  )
}
