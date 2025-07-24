const BannerText = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-30">
      <div className="md:w-2/3 w-4/5 p-6 md:p-8 text-left text-white bg-black/60 backdrop-blur-sm rounded-tr-2xl">
        {/* Seção "Sobre Nós" - clean e simples */}
        <div className="hidden md:flex items-center mb-4">
          <div className="w-8 h-0.5 bg-red-500 mr-3"></div>
          <p className="text-sm text-red-400 font-medium uppercase tracking-wide">SOBRE NÓS</p>
        </div>

        {/* Título principal - tamanhos mais equilibrados */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-2">
          Baterias <span className="text-red-500">FIRE</span>
        </h1>

        {/* Subtítulo - proporção harmoniosa */}
        <p className="text-lg md:text-2xl lg:text-3xl font-semibold text-gray-100 leading-relaxed">
          A energia que você precisa
        </p>
      </div>
    </div>
  )
}

export default BannerText
