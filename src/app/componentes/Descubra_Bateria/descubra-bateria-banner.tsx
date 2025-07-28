import Image from "next/image"

export default function DescubraBateriaBanner() {
  return (
    <div className="relative h-[250px] sm:h-[350px] md:h-[500px] lg:h-[600px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/descubra_bateria/banner_descubra_bateria.svg"
        alt="Descubra sua Bateria - Fire Baterias"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />

      {/* Overlay escuro mais intenso */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

      {/* Conteúdo posicionado à esquerda */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="max-w-3xl">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-3 sm:mb-4 md:mb-6 leading-tight tracking-tight">
              DESCUBRA SUA <span className="text-red-400">BATERIA</span>
            </h1>
            <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-gray-200 font-medium leading-relaxed max-w-2xl">
              Encontre a bateria perfeita para seu veículo em segundos. Simples, rápido e preciso.
            </p>
          </div>
        </div>
      </div>

      {/* Elemento decorativo - linha vertical */}
      <div className="absolute left-4 sm:left-6 top-1/2 transform -translate-y-1/2 w-1 h-16 sm:h-24 md:h-32 bg-red-600 hidden md:block"></div>
    </div>
  )
}
