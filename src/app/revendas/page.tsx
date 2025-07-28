"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import RevendasBanner from "../componentes/Revenda/revendas-banner"
import { MapPin, Phone, Filter, Search, Shield, Globe, Users, CheckCircle, MessageCircle } from "lucide-react"

// Importar o mapa dinamicamente para evitar erro de SSR
const MapaRevendas = dynamic(() => import("../componentes/Revenda/mapa-revendas"), {
  ssr: false,
  loading: () => (
    <div className="h-[400px] md:h-[500px] rounded-2xl bg-gray-200 flex items-center justify-center">
      <div className="text-gray-500">Carregando mapa...</div>
    </div>
  ),
})

interface Revenda {
  id: number
  nome: string
  endereco: string
  cidade: string
  estado: string
  tipo: string
  telefone: string
  lat: number
  lng: number
}

export default function RevendasPage() {
  const [revendas, setRevendas] = useState<Revenda[]>([])
  const [filtroRevendas, setFiltroRevendas] = useState<Revenda[]>([])
  const [filtroCidade, setFiltroCidade] = useState("")
  const [filtroTipo, setFiltroTipo] = useState("")
  const [loading, setLoading] = useState(true)

  // Carregar dados do JSON
  useEffect(() => {
    const carregarRevendas = async () => {
      try {
        const response = await fetch("/banco_provisorio_json/filial.json")
        const data = await response.json()
        setRevendas(data.revendas)
        setFiltroRevendas(data.revendas)
      } catch (error) {
        console.error("Erro ao carregar revendas:", error)
      } finally {
        setLoading(false)
      }
    }

    carregarRevendas()
  }, [])

  // Aplicar filtros
  useEffect(() => {
    let resultados = revendas

    if (filtroCidade) {
      resultados = resultados.filter((revenda) => revenda.cidade.toLowerCase().includes(filtroCidade.toLowerCase()))
    }

    if (filtroTipo) {
      resultados = resultados.filter((revenda) => revenda.tipo === filtroTipo)
    }

    setFiltroRevendas(resultados)
  }, [filtroCidade, filtroTipo, revendas])

  const tipos = ["Automotiva", "Estacionária", "Tracionária"]

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="flex items-center justify-center h-96">
          <div className="text-gray-500">Carregando...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <RevendasBanner />

      {/* Seção: Como Funciona o Localizador */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Como Funciona o Localizador</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Encontre uma filial Fire Baterias mais próxima de você em poucos cliques
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Search className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">1. Digite sua cidade</h3>
              <p className="text-gray-600 leading-relaxed">
                Insira o nome da sua cidade no campo de busca e selecione o tipo de bateria que você precisa.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">2. Veja os resultados</h3>
              <p className="text-gray-600 leading-relaxed">
                O sistema mostrará todas as filiais próximas a você no mapa interativo e em uma lista detalhada.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">3. Entre em contato</h3>
              <p className="text-gray-600 leading-relaxed">
                Ligue diretamente para a filial ou veja a localização no Google Maps para visitá-la pessoalmente.
              </p>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* Filtros */}
        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 mb-12">
          <div className="flex items-center mb-6">
            <Filter className="w-6 h-6 text-red-600 mr-3" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Localizar Filiais</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Filtro por Cidade */}
            <div>
              <label htmlFor="cidade" className="block text-sm font-medium text-gray-700 mb-2">
                Buscar por Cidade
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  id="cidade"
                  value={filtroCidade}
                  onChange={(e) => setFiltroCidade(e.target.value)}
                  placeholder="Digite o nome da cidade..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                />
              </div>
            </div>

            {/* Filtro por Tipo */}
            <div>
              <label htmlFor="tipo" className="block text-sm font-medium text-gray-700 mb-2">
                Tipo de Bateria
              </label>
              <select
                id="tipo"
                value={filtroTipo}
                onChange={(e) => setFiltroTipo(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300"
              >
                <option value="">Todos os tipos</option>
                {tipos.map((tipo) => (
                  <option key={tipo} value={tipo}>
                    {tipo}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Botão Limpar Filtros */}
          {(filtroCidade || filtroTipo) && (
            <div className="mt-6 text-center">
              <button
                onClick={() => {
                  setFiltroCidade("")
                  setFiltroTipo("")
                }}
                className="bg-gray-600 hover:bg-gray-700 text-white font-semibold px-6 py-2 rounded-xl transition-all duration-300"
              >
                Limpar Filtros
              </button>
            </div>
          )}
        </div>

        {/* Resultados */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Lista de Revendas - Com Scroll */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Filiais Encontradas ({filtroRevendas.length})
            </h2>

            {filtroRevendas.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Nenhuma filial encontrada</h3>
                <p className="text-gray-600">Tente ajustar os filtros para encontrar filiais na sua região.</p>
              </div>
            ) : (
              <div className="h-[600px] overflow-y-auto pr-2 space-y-6 scrollbar-thin scrollbar-thumb-red-300 scrollbar-track-gray-100">
                {filtroRevendas.map((revenda) => (
                  <div
                    key={revenda.id}
                    className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{revenda.nome}</h3>
                      <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                        {revenda.tipo}
                      </span>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-start">
                        <MapPin className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-gray-700">{revenda.endereco}</p>
                          <p className="text-gray-600 text-sm">
                            {revenda.cidade} - {revenda.estado}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <Phone className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                        <a
                          href={`tel:${revenda.telefone}`}
                          className="text-gray-700 hover:text-red-600 transition-colors font-medium"
                        >
                          {revenda.telefone}
                        </a>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href={`tel:${revenda.telefone}`}
                        className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-xl transition-all duration-300 text-center"
                      >
                        Ligar Agora
                      </a>
                      <a
                        href={`https://www.google.com/maps?q=${revenda.lat},${revenda.lng}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-xl transition-all duration-300 text-center"
                      >
                        Ver no Mapa
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Mapa */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Localização no Mapa</h2>
            <MapaRevendas revendas={filtroRevendas} />
          </div>
        </div>
      </main>

      {/* Seção: Por que comprar em uma revenda autorizada? */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                <Shield className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Por que comprar em uma filial autorizada?
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Garanta segurança, qualidade e confiabilidade na sua compra
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Garantia Oficial</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Garantia completa do fabricante com suporte técnico especializado
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Produtos Originais</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                100% originais, sem risco de falsificação ou produtos de qualidade duvidosa
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Suporte Técnico</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Instalação especializada e orientação técnica profissional
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Atendimento Rápido</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Atendimento mais rápido e confiável com profissionais capacitados
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção: Sobre nossa rede de revendas */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">Sobre a rede FIRE</h2>
              </div>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Nossa rede de parceiros cobre todo o território nacional, com atendimento especializado para você
                encontrar a bateria ideal em poucos minutos.
              </p>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-gray-300">Mais de 50.000 pontos de venda em todo o Brasil</p>
                </div>

                <div className="flex items-center">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-gray-300">Cobertura nacional com atendimento especializado</p>
                </div>

                <div className="flex items-center">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-gray-300">Parceiros treinados e certificados pela Fire Baterias</p>
                </div>

                <div className="flex items-center">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-gray-300">Atendimento rápido e produtos sempre disponíveis</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-3xl p-8 text-center">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">50K+</div>
                    <div className="text-red-200 text-sm">Pontos de Venda</div>
                  </div>
                  <div>
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">15+</div>
                    <div className="text-red-200 text-sm">Anos de Experiência</div>
                  </div>
                  <div>
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">100%</div>
                    <div className="text-red-200 text-sm">Produtos Originais</div>
                  </div>
                  <div>
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">24h</div>
                    <div className="text-red-200 text-sm">Suporte WhatsApp</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção CTA - Card Style */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 rounded-3xl p-8 md:p-12 text-center shadow-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Ainda tem dúvidas?
            </h2>
            <p className="text-lg sm:text-xl text-red-100 mb-6 sm:mb-8 leading-relaxed">
              Entre em contato pelo WhatsApp e receba atendimento especializado hoje mesmo!
            </p>

            <a
              href="https://wa.me/5535988124321?text=Olá! Preciso de ajuda para encontrar uma revenda Fire Baterias."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-gray-900 font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl text-lg"
            >
              <MessageCircle className="mr-3 w-6 h-6" />
              Falar Agora
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
