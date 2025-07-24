import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, MessageCircle } from "lucide-react"

interface ProductDetailsProps {
  produto: any
  categoria: string
  modelo: string
}

export default function ProductDetails({ produto, categoria, modelo }: ProductDetailsProps) {
  // Função para formatar o nome da propriedade
  const formatPropertyName = (key: string) => {
    const propertyNames: { [key: string]: string } = {
      codigo: "Código",
      dimensoes: "Dimensões",
      capacidade_c20: "Capacidade C20",
      capacidade_c10: "Capacidade C10",
      capacidade_c100: "Capacidade C100",
      capacidade_c120: "Capacidade C120",
      polaridade: "Polaridade",
      cca_menos_18: "CCA -18°C",
      cca_menos_10: "CCA -10°C",
      ca_mais_25: "CA +25°C",
      rc: "RC",
      garantia: "Garantia",
      tensao: "Tensão",
      terminal: "Terminal",
      peso: "Peso",
      manutencao: "Manutenção",
      tempo_ate_6v: "Tempo até 6V",
      carga_lenta: "Carga Lenta",
      carga_rapida: "Carga Rápida",
      posicao_instalacao: "Posição de Instalação",
    }
    return propertyNames[key] || key
  }

  // Propriedades a serem exibidas (excluindo algumas)
  const excludeProperties = ["imagem", "modelo_id"]
  const displayProperties = Object.keys(produto).filter((key) => !excludeProperties.includes(key))

  return (
    <div className="py-8 md:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/produtos"
            className="inline-flex items-center text-gray-600 hover:text-red-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar aos produtos
          </Link>
        </div>

        {/* Product Header */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-3xl p-8 md:p-12 mb-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{produto.codigo}</h1>
            <p className="text-xl text-gray-300">
              {categoria} • {modelo}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="relative h-80 md:h-96">
              <Image
                src={produto.imagem || "/placeholder.svg"}
                alt={produto.codigo}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Product Specifications */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Especificações Técnicas</h2>

            <div className="space-y-4">
              {displayProperties.map((key) => (
                <div
                  key={key}
                  className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0"
                >
                  <span className="text-gray-600 font-medium">{formatPropertyName(key)}:</span>
                  <span className="text-gray-900 font-semibold text-right">{produto[key]}</span>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Interessado neste produto?</h3>
              <div className="space-y-4">
                <a
                  href={`https://wa.me/5535988124321?text=Olá! Gostaria de saber mais sobre a bateria ${produto.codigo}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
                >
                  <MessageCircle className="mr-3 w-5 h-5" />
                  Consultar no WhatsApp
                </a>
                <Link
                  href="/contato"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
                >
                  Solicitar Orçamento
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
