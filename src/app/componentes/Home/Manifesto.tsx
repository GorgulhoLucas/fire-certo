import Image from "next/image"

const Manifesto = () => (
  <div className="relative">
    {/* Red Header Section */}
    <section className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white relative flex justify-end items-center h-20 md:h-24 lg:h-28 px-6 md:px-12">
      <header className="relative z-10">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">Baterias Fire</h1>
      </header>
    </section>

    {/* Main Content Section */}
    <section className="relative flex flex-col lg:flex-row lg:h-[500px]">
      {/* Left Side - Nossa Identidade */}
      <article className="bg-gradient-to-br from-gray-900 to-black text-white p-6 md:p-8 lg:p-10 shadow-2xl relative w-full lg:w-2/5 -mt-4 z-10">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 text-white">Nossa Identidade</h2>

        <div className="space-y-6">
          <div className="flex items-start group hover:transform hover:translate-x-1 transition-all duration-300">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mr-4 text-red-500 group-hover:text-red-400 transition-colors duration-300 flex-shrink-0">
              01
            </h3>
            <div className="flex-1">
              <h4 className="text-lg md:text-xl font-bold mb-2 text-white">Nossa Missão</h4>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                Fornecer soluções energéticas inovadoras com foco em sustentabilidade e excelência tecnológica.
              </p>
            </div>
          </div>

          <div className="flex items-start group hover:transform hover:translate-x-1 transition-all duration-300">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mr-4 text-red-500 group-hover:text-red-400 transition-colors duration-300 flex-shrink-0">
              02
            </h3>
            <div className="flex-1">
              <h4 className="text-lg md:text-xl font-bold mb-2 text-white">Visão</h4>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                Ser líder no mercado de baterias, reconhecida pela qualidade superior e responsabilidade ambiental.
              </p>
            </div>
          </div>

          <div className="flex items-start group hover:transform hover:translate-x-1 transition-all duration-300">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mr-4 text-red-500 group-hover:text-red-400 transition-colors duration-300 flex-shrink-0">
              03
            </h3>
            <div className="flex-1">
              <h4 className="text-lg md:text-xl font-bold mb-2 text-white">Valores</h4>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                Inovação contínua, sustentabilidade ambiental, qualidade superior, ética transparente e responsabilidade
                social.
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-4 right-4 w-12 h-12 border border-red-500/30 rounded-full"></div>
      </article>

      {/* Right Side - Motorcycle Image */}
      <figure className="relative lg:flex-1 h-[300px] md:h-[400px] lg:h-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=1200&h=800&fit=crop&crop=center"
          alt="Motocicleta esportiva com sistema elétrico avançado - Baterias FIRE"
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 60vw"
          priority
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/10 to-black/30"></div>

        {/* Image Text Overlay */}
        <div className="absolute bottom-4 left-4 text-white z-20">
          <div className="bg-black/60 backdrop-blur-sm p-4 rounded-lg border-l-4 border-red-500">
            <h3 className="text-lg md:text-xl font-bold mb-1">Tecnologia Avançada</h3>
            <p className="text-sm text-gray-200">Baterias de alta performance</p>
          </div>
        </div>

        {/* Decorative Corner */}
        <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-red-500/60"></div>
      </figure>
    </section>
  </div>
)

export default Manifesto
