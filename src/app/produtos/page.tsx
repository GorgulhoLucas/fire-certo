import ProductsHero from "../componentes/produtos/produtos_banner"
import ListaBeneficios from "../componentes/produtos/Secoes/beneficios"
import FireExperienceSection from "../componentes/produtos/experiencia_fire"
import Categorias from "../componentes/produtos/Categorias/nossas_categorias"
export default function ProdutosPage() {

  return (
    <div className="min-h-screen bg-gray-50">
      <ProductsHero />
      <Categorias/>
      <ListaBeneficios />
      <FireExperienceSection />
    </div>
  )
}
