import Image from "next/image"

export default function RevendasBanner() {
  return (
    <div className="relative h-[250px] sm:h-[350px] md:h-[500px] lg:h-[600px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/filial/banner_filial.svg"
        alt="Revendas Fire Baterias"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />

      {/* Overlay escuro mais intenso */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

      {/* Conteúdo posicionado à esquerda */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-6 leading-tight tracking-tight">
              FILIAIS
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 font-medium leading-relaxed max-w-lg">
              Encontre a Fire mais próxima de você
            </p>
          </div>
        </div>
      </div>

      {/* Elemento decorativo - linha vertical */}
      <div className="absolute left-6 top-1/2 transform -translate-y-1/2 w-1 h-32 bg-red-600 hidden md:block"></div>
    </div>
  )
}
