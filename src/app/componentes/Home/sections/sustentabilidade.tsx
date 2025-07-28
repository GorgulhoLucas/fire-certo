import Image from "next/image"

const Sustainability = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Imagem */}
          <div className="order-2 lg:order-1">
            <div className="relative w-full h-80 sm:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop"
                alt="Responsabilidade ambiental e sustentabilidade"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent" />
            </div>
          </div>

          {/* Conteúdo */}
          <div className="order-1 lg:order-2 space-y-6">
            <div>
              <span className="inline-block bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                LOGÍSTICA REVERSA
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Responsabilidade <span className="text-green-600">Ambiental</span>
              </h2>
            </div>

            <p className="text-xl text-gray-700 leading-relaxed font-medium">
              Nossa operação é resultado de um{" "}
              <span className="text-green-600 font-bold">compromisso autêntico com a sustentabilidade.</span>
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Cientes da importância de retribuir à sociedade e colaborar com o seu bem-estar, a Baterias Fire vê na
              sustentabilidade uma forma de garantir o futuro da indústria.
            </p>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Processo de Logística Reversa</h3>
              <div className="space-y-3">
                {[
                  "Distribuição de baterias novas para parceiros comerciais",
                  "Comercialização das baterias para consumidores",
                  "Retorno das baterias usadas através de pontos de coleta",
                  "Coleta das baterias usadas para tratamento adequado",
                  "Envio para empresas de reciclagem especializadas",
                  "Recebimento de matéria-prima reciclada para produção",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sustainability
