import Image from "next/image"
import Link from "next/link"

interface Produto {
  codigo: string
  imagem: string
  dimensoes: string
  capacidade_c20?: string
  capacidade_c10?: string
  garantia: string
  tensao?: string
  peso: string
  [key: string]: any
}

interface ProductGridProps {
  produtos: Produto[]
  categoria: string
  modelo: string
  modelTitle: string
}

export default function ProductGrid({ produtos, categoria, modelo, modelTitle }: ProductGridProps) {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Produtos <span className="text-red-500">{modelTitle}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Clique em qualquer produto para ver as especificações completas
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {produtos.map((produto) => (
            <Link key={produto.codigo} href={`/produtos/${categoria}/${modelo}/${produto.codigo}`} className="group">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-red-200">
                {/* Image */}
                <div className="relative h-48 bg-gray-50">
                  <Image
                    src={produto.imagem || "/placeholder.svg"}
                    alt={produto.codigo}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
                    {produto.codigo}
                  </h3>

                  {/* Quick Specs */}
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Capacidade:</span>
                      <span className="font-medium">{produto.capacidade_c20 || produto.capacidade_c10 || "N/A"}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Tensão:</span>
                      <span className="font-medium">{produto.tensao}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Garantia:</span>
                      <span className="font-medium">{produto.garantia}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-sm text-gray-500">Ver detalhes</span>
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center group-hover:bg-red-700 transition-colors">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
