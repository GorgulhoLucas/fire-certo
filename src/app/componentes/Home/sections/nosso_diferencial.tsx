import { FaCertificate, FaUserTie, FaTruckFast } from "react-icons/fa6"
import { FaShieldAlt } from "react-icons/fa"

export default function Differentials() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Nossos <span className="text-red-600">Diferenciais</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Diferencial 1 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="bg-red-600 text-white p-3 rounded-full mr-4 hover:scale-110 transition-transform duration-300">
                <FaCertificate className="text-lg" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Produtos Certificados</h3>
            </div>
            <p className="text-gray-600">
              Trabalhamos apenas com baterias das melhores marcas do mercado, todas certificadas e testadas
              rigorosamente.
            </p>
          </div>

          {/* Diferencial 2 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-500 text-white p-3 rounded-full mr-4 hover:scale-110 transition-transform duration-300">
                <FaUserTie className="text-lg" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Equipe Especializada</h3>
            </div>
            <p className="text-gray-600">
              Nossa equipe técnica possui ampla experiência e treinamento constante para oferecer o melhor suporte.
            </p>
          </div>

          {/* Diferencial 3 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 text-white p-3 rounded-full mr-4 hover:scale-110 transition-transform duration-300">
                <FaTruckFast className="text-lg" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Entrega Rápida</h3>
            </div>
            <p className="text-gray-600">
              Serviço de entrega e instalação ágil, garantindo que você não fique sem seu veículo por muito tempo.
            </p>
          </div>

          {/* Diferencial 4 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="bg-green-600 text-white p-3 rounded-full mr-4 hover:scale-110 transition-transform duration-300">
                <FaShieldAlt className="text-lg" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Garantia Estendida</h3>
            </div>
            <p className="text-gray-600">
              Oferecemos garantia estendida e suporte pós-venda dedicado para sua total tranquilidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
