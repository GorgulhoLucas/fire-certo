const SobreNos = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Título e Subtítulo */}
          <div className="space-y-6">
            <div>
              <span className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                SOBRE NÓS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Para a Baterias FIRE, a mudança começa com <span className="text-red-600">inovação e compromisso</span>{" "}
                desde o primeiro passo
              </h2>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-red-600 mb-2">26+</div>
                <div className="text-sm text-gray-600">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-red-600 mb-2">100%</div>
                <div className="text-sm text-gray-600">Qualidade Garantida</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-red-600 mb-2">24h</div>
                <div className="text-sm text-gray-600">Atendimento</div>
              </div>
            </div>
          </div>

          {/* Descrição */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              A empresa iniciou suas atividades em <strong>1998</strong> no município de Itajubá/MG. Com o
              reconhecimento de sua qualidade e a crescente demanda, a Baterias Fire desenvolveu um parque industrial
              moderno e sustentável.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Com uma presença consolidada em todo o Brasil e em diversos países da América do Sul, a empresa alcançou
              seu objetivo de fornecer soluções de excelência em baterias automotivas, estacionárias e solares.
            </p>

            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-red-600">
              <p className="text-gray-700 leading-relaxed">
                Nossa linha de produção é orientada por produtos de alta qualidade, responsabilidade social e ambiental,
                além de um atendimento comercial de excelência. Contamos com uma cadeia logística eficiente, incluindo
                frota própria, para garantir a segurança e agilidade na produção, distribuição e entrega.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SobreNos