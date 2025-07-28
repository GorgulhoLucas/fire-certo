"use client"

import { useRef } from "react"
import { Award, Shield, Zap, Users, Package } from "lucide-react"

const ListaBeneficios = () => {
  const beneficios = [
    {
      icon: Award,
      iconColor: "bg-red-500",
      titulo: "Qualidade Garantida",
      descricao: "Baterias com alto desempenho e durabilidade.",
    },
    {
      icon: Shield,
      iconColor: "bg-green-500",
      titulo: "Garantia Estendida",
      descricao: "Cobertura completa em caso de defeitos de fabricação.",
    },
    {
      icon: Zap,
      iconColor: "bg-yellow-500",
      titulo: "Alta Eficiência",
      descricao: "Tecnologia avançada para uma energia duradoura.",
    },
    {
      icon: Users,
      iconColor: "bg-blue-500",
      titulo: "Atendimento Especializado",
      descricao: "Equipe pronta para atender e orientar.",
    },
    {
      icon: Package,
      iconColor: "bg-purple-500",
      titulo: "Variedade de Produtos",
      descricao: "Ampla gama de baterias para diversas necessidades.",
    },
  ]

  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-gray-900">Nossos </span>
            <span className="text-red-500">Benefícios</span>
          </h2>
        </div>

        {/* Benefits Grid - Responsivo com layout especial */}
        <div className="max-w-6xl mx-auto">
          {/* Primeira linha - 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-4 sm:mb-6 lg:mb-8">
            {beneficios.slice(0, 3).map((beneficio, index) => {
              const IconComponent = beneficio.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 text-center group"
                >
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 ${beneficio.iconColor} rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl lg:text-xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                    {beneficio.titulo}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-base">
                    {beneficio.descricao}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Segunda linha - 2 cards centralizados */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-2xl mx-auto">
            {beneficios.slice(3, 5).map((beneficio, index) => {
              const IconComponent = beneficio.icon
              return (
                <div
                  key={index + 3}
                  className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 text-center group"
                >
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 ${beneficio.iconColor} rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl lg:text-xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                    {beneficio.titulo}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-base">
                    {beneficio.descricao}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ListaBeneficios
