import { Phone, MessageCircle, Mail, MapPin, Clock, Users, Award } from "lucide-react"
import Image from "next/image"

export default function ContactSection() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Banner Hero - Estilo Industrial */}
      <div className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
        {/* Background Image */}
        <Image
          src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&h=800&fit=crop&crop=center"
          alt="Contato Fire Baterias"
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
                CONTATO
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 font-medium leading-relaxed max-w-lg">
                A energia que você precisa, com o atendimento que você merece
              </p>
            </div>
          </div>
        </div>

        {/* Elemento decorativo - linha vertical */}
        <div className="absolute left-6 top-1/2 transform -translate-y-1/2 w-1 h-32 bg-red-600 hidden md:block"></div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-6 md:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">15+ Anos</h3>
            <p className="text-gray-600 font-medium">de experiência no mercado</p>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">2 Filiais</h3>
            <p className="text-gray-600 font-medium">em Minas Gerais</p>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Resposta</h3>
            <p className="text-gray-600 font-medium">em até 5 minutos</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulário */}
          <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 lg:p-10">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Envie sua mensagem</h2>
              <p className="text-gray-600">Preencha o formulário e entraremos em contato em breve</p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome completo*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone*
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    required
                    placeholder="(00) 00000-0000"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Assunto*
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                >
                  <option value="" disabled>
                    Selecione um assunto
                  </option>
                  <option value="Dúvidas">Dúvidas sobre produtos</option>
                  <option value="Orçamento">Solicitar orçamento</option>
                  <option value="Suporte Técnico">Suporte técnico</option>
                  <option value="Garantia">Questões de garantia</option>
                  <option value="Outros">Outros assuntos</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem*
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 resize-vertical"
                  placeholder="Descreva sua necessidade ou dúvida..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Informações de contato */}
          <div className="space-y-8">
            {/* Filiais */}
            <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Nossas Filiais</h2>
              <div className="space-y-6">
                {/* Itajubá */}
                <div className="relative bg-gradient-to-r from-red-50 to-red-100 rounded-2xl p-6 border-l-4 border-red-500">
                  <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center">
                    <MapPin className="w-5 h-5 text-red-600 mr-2" />
                    ITAJUBÁ - MG
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <MapPin className="w-4 h-4 text-red-600 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">Av. Paulo Chiaradia, 316</p>
                    </div>
                    <div className="flex items-start">
                      <Phone className="w-4 h-4 text-red-600 mr-3 mt-1 flex-shrink-0" />
                      <a href="tel:+553536220282" className="text-gray-700 hover:text-red-600 transition-colors">
                        (35) 3622-0282
                      </a>
                    </div>
                  </div>
                </div>

                {/* Pouso Alegre */}
                <div className="relative bg-gradient-to-r from-red-50 to-red-100 rounded-2xl p-6 border-l-4 border-red-500">
                  <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center">
                    <MapPin className="w-5 h-5 text-red-600 mr-2" />
                    POUSO ALEGRE - MG
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <MapPin className="w-4 h-4 text-red-600 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">Av. Vereador Antônio da Costa Rios, 1172</p>
                    </div>
                    <div className="flex items-start">
                      <Phone className="w-4 h-4 text-red-600 mr-3 mt-1 flex-shrink-0" />
                      <a href="tel:+553534220728" className="text-gray-700 hover:text-red-600 transition-colors">
                        (35) 3422-0728
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contato Geral */}
            <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Contato Geral</h2>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">WhatsApp</h3>
                    <a
                      href="https://wa.me/5535988124321"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 transition-colors"
                    >
                      (35) 98812-4321
                    </a>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">E-mail</h3>
                    <a
                      href="mailto:contato@firebaterias.com.br"
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      contato@firebaterias.com.br
                    </a>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center mr-4">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Horário de Atendimento</h3>
                    <p className="text-gray-600">Seg-Sex: 8h-18h | Sáb: 8h-12h</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mapa das Filiais */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="p-6 bg-gradient-to-r from-red-600 to-red-700 text-white">
                <h3 className="font-bold text-lg">Localização das Filiais</h3>
                <p className="text-red-100">Itajubá e Pouso Alegre - MG</p>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117663.88835631336!2d-45.52461!3d-22.41461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ca9c8b0b8b0b0b%3A0x0!2sItajub%C3%A1%2C%20MG!5e0!3m2!1spt-BR!2sbr!4v1685555567895!5m2!1spt-BR!2sbr"
                width="100%"
                height="350"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Fire Baterias - Itajubá e Pouso Alegre"
              ></iframe>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
