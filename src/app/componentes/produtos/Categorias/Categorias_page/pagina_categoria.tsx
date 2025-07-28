"use client"

import { useState } from "react"
import Image from "next/image"
import { MessageCircle, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface CategoryData {
  tipo: string
  titulo: string
  descricao: string
  imagem: string
  modelos: any[]
}

interface CategoryPageProps {
  categoryData: CategoryData
}

export default function CategoryPage({ categoryData }: CategoryPageProps) {
  const [selectedModel, setSelectedModel] = useState<any>(categoryData.modelos[0] || null)

  // Função para formatar nome da propriedade
  const formatPropertyName = (key: string) => {
    const propertyNames: { [key: string]: string } = {
      dimensoes: "DIMENSÕES",
      capacidade_c20: "CAPACIDADE C20",
      capacidade_c10: "CAPACIDADE C10",
      capacidade_c100: "CAPACIDADE C100",
      capacidade_c120: "CAPACIDADE C120",
      polaridade: "POLARIDADE",
      cca_menos_18: "CCA (-18°C)",
      cca_menos_10: "CCA (-10°C)",
      ca_mais_25: "CA (+25°C)",
      rc: "RESERVA (RC)",
      garantia: "GARANTIA",
      tensao: "TENSÃO",
      terminal: "TIPO DE TERMINAL",
      peso: "PESO",
      tempo_ate_6v: "TEMPO ATÉ 6V",
      carga_lenta: "CARGA LENTA",
      carga_rapida: "CARGA RÁPIDA",
      posicao_instalacao: "POSIÇÃO DE INSTALAÇÃO",
    }
    return propertyNames[key] || key.toUpperCase()
  }

  // Propriedades principais para exibir nos cards
  const getMainProperties = (produto: any) => {
    const mainProps = []

    if (produto.dimensoes) mainProps.push({ key: "dimensoes", value: produto.dimensoes })
    if (produto.capacidade_c20) mainProps.push({ key: "capacidade_c20", value: produto.capacidade_c20 })
    if (produto.capacidade_c10) mainProps.push({ key: "capacidade_c10", value: produto.capacidade_c10 })
    if (produto.capacidade_c100) mainProps.push({ key: "capacidade_c100", value: produto.capacidade_c100 })
    if (produto.capacidade_c120) mainProps.push({ key: "capacidade_c120", value: produto.capacidade_c120 })
    if (produto.polaridade) mainProps.push({ key: "polaridade", value: produto.polaridade })
    if (produto.cca_menos_18) mainProps.push({ key: "cca_menos_18", value: produto.cca_menos_18 })
    if (produto.cca_menos_10) mainProps.push({ key: "cca_menos_10", value: produto.cca_menos_10 })
    if (produto.ca_mais_25) mainProps.push({ key: "ca_mais_25", value: produto.ca_mais_25 })
    if (produto.rc) mainProps.push({ key: "rc", value: produto.rc })
    if (produto.garantia) mainProps.push({ key: "garantia", value: produto.garantia })
    if (produto.tensao) mainProps.push({ key: "tensao", value: produto.tensao })
    if (produto.terminal) mainProps.push({ key: "terminal", value: produto.terminal })
    if (produto.peso) mainProps.push({ key: "peso", value: produto.peso })
    if (produto.tempo_ate_6v) mainProps.push({ key: "tempo_ate_6v", value: produto.tempo_ate_6v })
    if (produto.carga_lenta) mainProps.push({ key: "carga_lenta", value: produto.carga_lenta })
    if (produto.carga_rapida) mainProps.push({ key: "carga_rapida", value: produto.carga_rapida })
    if (produto.posicao_instalacao) mainProps.push({ key: "posicao_instalacao", value: produto.posicao_instalacao })

    return mainProps
  }

  return (
    <div>
      {/* Banner da Categoria - Estilo Industrial */}
      <div className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">


        <Image
          src={categoryData.imagem} //arrumar dps
          alt={categoryData.titulo}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />



        {/* Overlay escuro mais intenso */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

        {/* Conteúdo posicionado à esquerda */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-6 leading-tight tracking-tight">
                {categoryData.titulo}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 font-medium leading-relaxed max-w-lg">
                {categoryData.descricao}
              </p>
            </div>
          </div>
        </div>

        {/* Elemento decorativo - linha vertical */}
        <div className="absolute left-6 top-1/2 transform -translate-y-1/2 w-1 h-32 bg-red-600 hidden md:block"></div>
      </div>

      {/* Conteúdo Principal */}
      <div className="py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="mb-12">
            <Link
              href="/produtos"
              className="inline-flex items-center text-gray-600 hover:text-red-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar aos produtos
            </Link>
          </div>

          {/* Seletor de Modelos */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Escolha o Modelo</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categoryData.modelos.map((modelo, index) => (
                <button
                  key={modelo.id}
                  onClick={() => setSelectedModel(modelo)}
                  className={`relative p-6 rounded-2xl transition-all duration-300 hover:scale-105 ${
                    selectedModel?.id === modelo.id
                      ? "bg-red-600 text-white shadow-2xl"
                      : "bg-white text-gray-900 shadow-lg hover:shadow-xl"
                  }`}
                >
                  {/* Imagem da bateria */}
                  <div className="relative h-32 mb-4">
                    <Image
                      src={modelo.imagem}   
                      alt={modelo.titulo}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                  </div>

                  {/* Nome do modelo */}
                  <h3 className="font-bold text-lg mb-2 leading-tight">{modelo.titulo}</h3>

                  {/* Quantidade de produtos */}
                  <p className={`text-sm ${selectedModel?.id === modelo.id ? "text-red-200" : "text-gray-600"}`}>
                    {modelo.produtos.length} produto{modelo.produtos.length !== 1 ? "s" : ""}
                  </p>

                  {/* Badge de selecionado */}
                  {selectedModel?.id === modelo.id && (
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Cards de Produtos */}
          {selectedModel && (
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">{selectedModel.titulo}</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {selectedModel.produtos.map((produto: any) => {
                  const mainProperties = getMainProperties(produto)

                  return (
                    <div
                      key={produto.codigo}
                      className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                    >
                      {/* Header com imagem e código */}
                      <div className="relative bg-gradient-to-r from-gray-800 to-gray-900 p-6">
                        <div className="flex items-center justify-between">
                          <div className="relative w-24 h-16">
                            <Image
                              src={produto.imagem}
                              alt={produto.codigo}
                              fill
                              className="object-contain"
                              sizes="96px"
                            />
                          </div>
                          <div className="bg-gray-700 px-4 py-2 rounded-lg">
                            <h3 className="text-white font-bold text-lg">{produto.codigo}</h3>
                          </div>
                        </div>
                      </div>

                      {/* Tabela de especificações */}
                      <div className="p-6">
                        <div className="space-y-0 border border-gray-200 rounded-lg overflow-hidden">
                          {mainProperties.map((prop, index) => (
                            <div
                              key={prop.key}
                              className={`grid grid-cols-2 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                            >
                              <div className="px-4 py-3 font-semibold text-gray-900 text-sm border-r border-gray-200">
                                {formatPropertyName(prop.key)}
                              </div>
                              <div className="px-4 py-3 text-gray-700 text-sm font-medium">{prop.value}</div>
                            </div>
                          ))}

                          {/* Footer com tipo de manutenção */}
                          {produto.manutencao && (
                            <div className="bg-green-50 px-4 py-3 text-center">
                              <span className="text-green-800 font-semibold text-sm">{produto.manutencao}</span>
                            </div>
                          )}
                        </div>

                        {/* Botões de ação */}
                        <div className="mt-6 space-y-3">
                          <a
                            href={`https://wa.me/5535988124321?text=Olá! Gostaria de saber mais sobre a bateria ${produto.codigo}.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center justify-center text-sm"
                          >
                            <MessageCircle className="mr-2 w-4 h-4" />
                            Consultar no WhatsApp
                          </a>
                          <Link
                            href="/contato"
                            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center justify-center text-sm"
                          >
                            Solicitar Orçamento
                          </Link>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
