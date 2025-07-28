import Image from "next/image"

export default function FireExperienceSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px] md:min-h-[450px]">
          {/* Left Side - Content */}
          <div className="relative p-6 md:p-8 lg:p-12 xl:p-16 flex flex-col justify-center bg-white">
            <div className="max-w-2xl">
              {/* Small label */}
              <div className="flex items-center mb-4">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                <span className="text-red-400 uppercase tracking-wider text-sm font-medium">NOSSA EXPERTISE</span>
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Experimente a <span className="text-red-500">FIRE</span>
              </h2>

              {/* First Paragraph */}
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 font-medium">
                Todos os dias, fabricantes de veículos e produtos relacionados em todo o mundo contam com a FIRE para
                solucionar desafios energéticos, dos mais simples aos mais complexos no mercado automotivo.
              </p>

              {/* Second Paragraph with highlights */}
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
                Somos especialistas em tecnologias de energia automotiva, oferecendo um vasto catálogo com mais de{" "}
                <span className="font-bold text-red-600">100 modelos de baterias</span>, incluindo{" "}
                <span className="font-bold text-gray-900">
                  baterias automotivas, estacionárias, solares, para motocicletas e veículos pesados
                </span>{" "}
                que elevam a eficiência e reduzem custos.
              </p>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="/contato"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-sm"
                >
                  Fale com nossa equipe
                </a>
                <a
                  href="https://wa.me/5535988124321?text=Olá! Gostaria de saber mais sobre as baterias FIRE."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-sm"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-6 right-6 w-10 h-10 border border-red-500/30 rounded-full hidden lg:block"></div>
          </div>

          {/* Right Side - Image */}
          <div className="relative overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&crop=center"
              alt="Linha de produção automotiva moderna - Tecnologia FIRE"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />

            {/* Overlay gradients */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/10 to-black/20"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

            {/* Stats overlay - mais compacto */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-black/60 backdrop-blur-sm p-4 rounded-xl border-l-4 border-red-500">
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div>
                    <div className="text-xl md:text-2xl font-bold text-white mb-1">100+</div>
                    <div className="text-xs text-gray-300">Modelos disponíveis</div>
                  </div>
                  <div>
                    <div className="text-xl md:text-2xl font-bold text-white mb-1">20+</div>
                    <div className="text-xs text-gray-300">Anos de experiência</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative corner */}
            <div className="absolute top-6 right-6 w-10 h-10 border-t-2 border-r-2 border-red-500/60"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
