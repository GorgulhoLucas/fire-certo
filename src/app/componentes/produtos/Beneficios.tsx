import Image from "next/image"
import Link from "next/link"

type VehicleCardProps = {
  title: string
  description: string
  image: string
  alt: string
  href: string
}

function VehicleCard({ title, description, image, alt, href }: VehicleCardProps) {
  return (
    <Link href={href}>
      <div className="relative rounded-xl sm:rounded-2xl overflow-hidden h-64 sm:h-72 md:h-80 bg-gray-900 cursor-pointer group">
        <Image
          src={image || "/placeholder.svg"}
          alt={alt}
          fill
          className="object-cover group-hover:scale-105 transition duration-700"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-3 sm:left-4 md:left-6 right-3 sm:right-4 md:right-6">
          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-red-600 rounded-full flex items-center justify-center mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-sm sm:text-base md:text-lg lg:text-xl text-white font-bold mb-1 sm:mb-2 leading-tight">
            {title}
          </h3>
          <p className="text-xs sm:text-sm md:text-sm text-gray-300 leading-relaxed">{description}</p>
        </div>
      </div>
    </Link>
  )
}

interface BeneficioProps {
  lista: { imagem: string; titulo: string }[]
}

const Beneficios = ({ lista }: BeneficioProps) => {
  // Categorias baseadas nos novos tipos fornecidos
  const categorias = [
    {
      title: "VEÍCULOS LEVES",
      description: "Carros, SUVs e utilitários",
      image: "/images/veiculosleve.webp",
      alt: "Veículos leves - Baterias automotivas",
      tipo: "veiculos-leves",
      href: "/produtos/veiculos-leves",
    },
    {
      title: "MOTOS",
      description: "Motocicletas e scooters",
      image: "/images/motos.webp",
      alt: "Motos - Baterias para motocicletas",
      tipo: "motocicletas",
      href: "/produtos/motocicletas",
    },
    {
      title: "VEÍCULOS PESADOS",
      description: "Caminhões e ônibus",
      image: "/images/veiculospesados.webp",
      alt: "Veículos pesados - Baterias para caminhões",
      tipo: "veiculos-pesados",
      href: "/produtos/veiculos-pesados",
    },
    {
      title: "SOLARES",
      description: "Sistemas fotovoltaicos",
      image: "/images/solar.webp",
      alt: "Solares - Baterias para energia solar",
      tipo: "solares",
      href: "/produtos/solares",
    },
    {
      title: "ESTACIONÁRIAS",
      description: "Nobreaks e telecomunicações",
      image: "/images/estacionaria.webp",
      alt: "Estacionárias - Baterias estacionárias",
      tipo: "estacionarias",
      href: "/produtos/estacionarias",
    },
  ]

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-3 sm:mb-4 md:mb-6">
            <span className="text-gray-900">Nossas </span>
            <span className="text-red-500">Categorias</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto px-4">
            Encontre a bateria perfeita para sua necessidade
          </p>
        </div>

        {/* Categories Grid - Uma fileira responsiva */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          {categorias.map((categoria, index) => (
            <VehicleCard
              key={index}
              title={categoria.title}
              description={categoria.description}
              image={categoria.image}
              alt={categoria.alt}
              href={categoria.href}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Beneficios
