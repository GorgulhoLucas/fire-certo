import { FaWhatsapp } from "react-icons/fa"

export default function HelpSection() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Glow effect */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-red-500/20 rounded-full filter blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Main Content */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Title */}
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Precisa de ajuda com suas <span className="text-red-400">baterias</span>?
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Entre em contato pelo WhatsApp e receba atendimento especializado hoje mesmo!
          </p>

          {/* WhatsApp CTA */}
          <div className="bg-white rounded-full p-2 shadow-2xl max-w-2xl mx-auto mb-8">
            <div className="flex items-center">
              <div className="flex-1 px-6 py-4 text-left">
                <div className="flex items-center gap-3 text-gray-600">
                  <FaWhatsapp className="text-green-500 text-xl" />
                  <span className="text-lg">wa.me/firebaterias</span>
                </div>
              </div>
              <a
                href="https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre baterias."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-500/25"
              >
                Falar Agora
              </a>
            </div>
          </div>

          {/* Additional Info */}
          <p className="text-gray-400 text-lg">Atendimento gratuito. Resposta em até 5 minutos!</p>
        </div>
      </div>
    </section>
  )
}
