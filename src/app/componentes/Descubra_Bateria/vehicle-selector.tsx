"use client"

import { Search, Car, Calendar, Tag } from "lucide-react"

interface Veiculo {
  marca: string
  modelos: {
    nome: string
    anos: {
      ano: string
      baterias: string[]
    }[]
  }[]
}

interface VehicleSelectorProps {
  veiculos: Veiculo[]
  marcaSelecionada: string
  modeloSelecionado: string
  anoSelecionado: string
  onMarcaChange: (marca: string) => void
  onModeloChange: (modelo: string) => void
  onAnoChange: (ano: string) => void
  onBuscar: () => void
  loading: boolean
}

export default function VehicleSelector({
  veiculos,
  marcaSelecionada,
  modeloSelecionado,
  anoSelecionado,
  onMarcaChange,
  onModeloChange,
  onAnoChange,
  onBuscar,
  loading,
}: VehicleSelectorProps) {
  // Obter modelos da marca selecionada
  const modelosDisponiveis = marcaSelecionada ? veiculos.find((v) => v.marca === marcaSelecionada)?.modelos || [] : []

  // Obter anos do modelo selecionado
  const anosDisponiveis = modeloSelecionado
    ? modelosDisponiveis.find((m) => m.nome === modeloSelecionado)?.anos || []
    : []

  // Reset campos dependentes
  const handleMarcaChange = (marca: string) => {
    onMarcaChange(marca)
    onModeloChange("")
    onAnoChange("")
  }

  const handleModeloChange = (modelo: string) => {
    onModeloChange(modelo)
    onAnoChange("")
  }

  const podeRealizar = marcaSelecionada && modeloSelecionado && anoSelecionado && !loading

  return (
    <section className="mb-16">
      <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 lg:p-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Selecione seu Veículo</h2>
          <p className="text-gray-600 text-lg">Preencha os dados do seu veículo para encontrar a bateria ideal</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Marca */}
          <div>
            <label htmlFor="marca" className="block text-sm font-semibold text-gray-700 mb-3">
              <Car className="w-4 h-4 inline mr-2 text-red-600" />
              Marca do Veículo
            </label>
            <select
              id="marca"
              value={marcaSelecionada}
              onChange={(e) => handleMarcaChange(e.target.value)}
              className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 text-gray-900 font-medium bg-white"
              disabled={loading}
            >
              <option value="">Selecione a marca</option>
              {veiculos.map((veiculo) => (
                <option key={veiculo.marca} value={veiculo.marca}>
                  {veiculo.marca}
                </option>
              ))}
            </select>
          </div>

          {/* Modelo */}
          <div>
            <label htmlFor="modelo" className="block text-sm font-semibold text-gray-700 mb-3">
              <Tag className="w-4 h-4 inline mr-2 text-red-600" />
              Modelo
            </label>
            <select
              id="modelo"
              value={modeloSelecionado}
              onChange={(e) => handleModeloChange(e.target.value)}
              className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 text-gray-900 font-medium bg-white disabled:bg-gray-100 disabled:text-gray-500"
              disabled={!marcaSelecionada || loading}
            >
              <option value="">Selecione o modelo</option>
              {modelosDisponiveis.map((modelo) => (
                <option key={modelo.nome} value={modelo.nome}>
                  {modelo.nome}
                </option>
              ))}
            </select>
          </div>

          {/* Ano */}
          <div>
            <label htmlFor="ano" className="block text-sm font-semibold text-gray-700 mb-3">
              <Calendar className="w-4 h-4 inline mr-2 text-red-600" />
              Ano
            </label>
            <select
              id="ano"
              value={anoSelecionado}
              onChange={(e) => onAnoChange(e.target.value)}
              className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 text-gray-900 font-medium bg-white disabled:bg-gray-100 disabled:text-gray-500"
              disabled={!modeloSelecionado || loading}
            >
              <option value="">Selecione o ano</option>
              {anosDisponiveis.map((ano) => (
                <option key={ano.ano} value={ano.ano}>
                  {ano.ano}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Botão de Busca */}
        <div className="text-center">
          <button
            onClick={onBuscar}
            disabled={!podeRealizar}
            className={`inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl ${
              podeRealizar
                ? "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white hover:scale-105"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                Buscando...
              </>
            ) : (
              <>
                <Search className="w-5 h-5 mr-3" />
                Buscar Baterias Compatíveis
              </>
            )}
          </button>
        </div>

        {/* Informação adicional */}
        <div className="mt-8 p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-semibold text-blue-800">Dica importante</h3>
              <p className="text-sm text-blue-700 mt-1">
                Nosso sistema mostra apenas baterias 100% compatíveis com seu veículo. Para dúvidas específicas, entre
                em contato com nossa equipe técnica.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
