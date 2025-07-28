const BannerText = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-30">
      <div className="w-4/5 sm:w-2/3 md:w-2/3 p-4 sm:p-6 md:p-8 text-left text-white bg-black/60 backdrop-blur-sm rounded-tr-xl sm:rounded-tr-2xl">
        {/* Seção "Sobre Nós" - agora visível em todas as telas e responsiva */}
        <div className="flex items-center mb-2 sm:mb-3 md:mb-4">
          {" "}
          {/* Removido 'hidden md:flex' */}
          <div className="w-4 sm:w-6 md:w-8 h-0.5 bg-red-500 mr-2 sm:mr-3"></div> {/* Tamanho da linha responsivo */}
          <p className="text-xs sm:text-sm text-red-400 font-medium uppercase tracking-wide">SOBRE NÓS</p>
        </div>

        {/* Título principal - tamanhos mais equilibrados e responsivos */}
        <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-1 sm:mb-2">
          {" "}
          {/* Ajustado text-2xl para text-xl em mobile */}
          Baterias <span className="text-red-500">FIRE</span>
        </h1>

        {/* Subtítulo - proporção harmoniosa e responsiva */}
        <p className="text-sm sm:text-base md:text-2xl lg:text-3xl font-semibold text-gray-100 leading-relaxed">
          A energia que você precisa
        </p>
      </div>
    </div>
  )
}

export default BannerText
