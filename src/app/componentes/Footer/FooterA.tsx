import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaCcPaypal,
  FaBarcode,
  FaMoneyBillWave,
} from "react-icons/fa"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">BATERIAS FIRE</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              A energia que você precisa. Qualidade superior em baterias automotivas.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">INSTITUCIONAL</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/produtos" className="text-gray-400 hover:text-white transition-colors">
                  Produtos
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-400 hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Stores */}
          <div>
            <h4 className="text-lg font-semibold mb-6">LOJAS</h4>
            <div className="space-y-6">
              <div>
                <h5 className="text-white font-medium mb-2">ITAJUBÁ - MG</h5>
                <p className="text-gray-400 text-sm mb-1">Av. Paulo Chiaradia, 316</p>
                <p className="text-gray-400 text-sm">(35) 3622-0282</p>
              </div>
              <div>
                <h5 className="text-white font-medium mb-2">POUSO ALEGRE - MG</h5>
                <p className="text-gray-400 text-sm mb-1">Av. Vereador Antônio da Costa Rios, 1172</p>
                <p className="text-gray-400 text-sm">(35) 3422-0728</p>
              </div>
            </div>
          </div>

          {/* Payment */}
          <div>
            <h4 className="text-lg font-semibold mb-6">PAGAMENTO</h4>
            <div className="grid grid-cols-3 gap-3 mb-6">
              {[FaCcVisa, FaCcMastercard, FaCcAmex, FaCcPaypal, FaBarcode, FaMoneyBillWave].map((Icon, idx) => (
                <div key={idx} className="bg-gray-900 p-3 rounded flex items-center justify-center">
                  <Icon className="text-gray-400" size={20} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">© 2024 Baterias FIRE. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
