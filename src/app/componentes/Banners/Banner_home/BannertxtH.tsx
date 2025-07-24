const BannerText = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-30">
      <div className="md:w-2/3 lg:w-1/2 w-4/5 p-3 md:p-6 lg:p-8 text-left text-white bg-gradient-to-r from-black/80 via-black/70 to-transparent backdrop-blur-sm rounded-tr-3xl md:rounded-tr-[3rem]">
        {/* Seção "Sobre Nós" - visível apenas no desktop */}
        <div className="hidden md:flex items-center mb-2 lg:mb-4">
          <div className="w-8 lg:w-12 h-0.5 bg-red-500 mr-3"></div>
          <p className="text-xs lg:text-sm text-red-400 font-medium tracking-wider uppercase">SOBRE NÓS</p>
        </div>

        {/* Título principal */}
        <h1 className="text-2xl md:text-4xl lg:text-6xl xl:text-7xl font-bold font-space-grotesk leading-tight">
          Baterias <span className="text-red-500 drop-shadow-lg">FIRE</span>
        </h1>

        {/* Subtítulo */}
        <p className="mt-2 md:mt-3 lg:mt-4 text-lg md:text-2xl lg:text-4xl xl:text-5xl font-bold font-space-grotesk text-gray-100 leading-tight">
          A energia que você precisa
        </p>

        {/* Informações de contato - visível apenas em telas maiores */}
        <div className="hidden lg:flex items-center mt-4 xl:mt-6 space-x-6 text-sm xl:text-base text-gray-300">
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span>3622.0282 | 98812.4321</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <span>Atendimento especializado</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerText
