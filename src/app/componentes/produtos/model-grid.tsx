import Image from "next/image"
import Link from "next/link"

interface Modelo {
  id: string
  titulo: string
  descricao: string
  imagem: string
  produtos: any[]
}

interface ModelGridProps {
  modelos: Modelo[]
  categoria: string
}

export default function ModelGrid({ modelos, categoria }: ModelGridProps) {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Modelos <span className="text-red-500">Disponíveis</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Escolha o modelo ideal para suas necessidades</p>
        </div>

        {/* Models Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {modelos.map((modelo) => (
            <Link key={modelo.id} href={`/produtos/${categoria}/${modelo.id}`} className="group">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-48 bg-gray-100">
                  <Image
                    src={modelo.imagem || "/placeholder.svg"}
                    alt={modelo.titulo}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                    {modelo.titulo}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{modelo.descricao}</p>

                  {/* Products Count */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {modelo.produtos.length} produto{modelo.produtos.length !== 1 ? "s" : ""}
                    </span>
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
