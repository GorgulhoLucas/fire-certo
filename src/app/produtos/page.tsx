import Footer from "../componentes/Footer/FooterA"
import ProductsHero from "../componentes/produtos/products-hero"
import Beneficios from "../componentes/produtos/Beneficios"
import ListaBeneficios from "../componentes/produtos/lista-beneficios"
import FireExperienceSection from "../componentes/produtos/fire-experience-section"
export default function ProdutosPage() {
  const beneficiosData = [
    {
      imagem: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=300&h=150&fit=crop",
      titulo: "Baterias\nAutomotivas",
    },
    {
      imagem: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=150&fit=crop",
      titulo: "Baterias\nEstacionárias",
    },
    {
      imagem: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=300&h=150&fit=crop",
      titulo: "Baterias\nSolares",
    },
    {
      imagem: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=300&h=150&fit=crop",
      titulo: "Baterias\nIndustriais",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <ProductsHero />
      <Beneficios lista={beneficiosData} />
      <ListaBeneficios />
      <FireExperienceSection />
    </div>
  )
}
