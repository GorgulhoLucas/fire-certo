import Image from "next/image"

export default function BrandsSection() {
  const brands = [
  {
    src: "/home/marcas_parceiras/marca_parceira1.svg",
    alt: "Marca Parceira 1",
    name: "Marca Parceira 1",
    description: "Qualidade garantida",
  },
  {
    src: "/home/marcas_parceiras/marca_parceira2.svg",
    alt: "Marca Parceira 2",
    name: "Marca Parceira 2",
    description: "Confiança e inovação",
  },
]


  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Marcas <span className="text-red-500">Parceiras</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trabalhamos com as melhores marcas do mercado para garantir qualidade e confiabilidade
          </p>
        </div>

        {/* Brands Grid */}
        {/* Ajustado para exibir apenas 2 colunas e centralizar a grade */}
        <div className="grid grid-cols-2 gap-6 max-w-md mx-auto">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-red-200 hover:-translate-y-2 overflow-hidden h-48"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={brand.src || "/placeholder.svg"}
                  alt={brand.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 50vw"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Check icon */}
              <div className="absolute top-4 left-4 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                <h3 className="text-white font-bold text-lg mb-1 group-hover:text-red-200 transition-colors duration-300">
                  {brand.name}
                </h3>
                <p className="text-gray-300 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  {brand.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>

        {/* Bottom text */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Mais de <span className="font-bold text-red-500">15 anos</span> de parceria com as principais marcas do
            mercado
          </p>
        </div>
      </div>
    </section>
  )
}
