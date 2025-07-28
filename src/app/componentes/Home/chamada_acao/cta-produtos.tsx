import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function CtaProdutos() {
  return (
    <section className="py-8 md:py-12 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl min-h-[280px] sm:min-h-[320px] md:min-h-[350px]">
          {/* Background Image - Only red car */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1200&h=600&fit=crop&crop=center"
              alt="Carro esportivo vermelho"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />

            {/* Dark overlay for text readability - adjusted for mobile */}
            <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/80 via-black/50 to-black/60 sm:from-black/70 sm:via-black/40 sm:to-black/60"></div>

            {/* Red accent overlay */}
            <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-red-900/40 via-transparent to-red-900/20 sm:from-red-900/30 sm:via-transparent sm:to-red-900/20"></div>
          </div>

          {/* Content - responsive positioning */}
          <div className="relative z-10 h-full flex items-end sm:items-center justify-center sm:justify-end p-4 sm:p-6 md:p-8">
            <div className="w-full max-w-lg text-center sm:text-right">
              {/* Title - responsive sizing and color */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                Conheça Nossos{" "}
                <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Produtos</span>
              </h2>

              {/* Subtitle - responsive sizing */}
              <p className="text-base sm:text-lg text-gray-200 mb-6 sm:mb-6 leading-relaxed px-2 sm:px-0">
                Descubra nossa linha completa de baterias de alta qualidade para todas as suas necessidades
              </p>

              {/* CTA Button - responsive sizing */}
              <Link
                href="/produtos"
                className="inline-flex items-center bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl group text-sm sm:text-base"
              >
                Ver Todos os Produtos
                <ArrowRight className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
