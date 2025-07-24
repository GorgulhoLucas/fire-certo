import { notFound } from "next/navigation"
import CategoryPage from "../../componentes/produtos/category-page"
import bateriasData from '@/app/componentes/Data/baterias.json'



interface ProductPageProps {
  params: {
    categoria: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const { categoria } = params

  // Encontrar a categoria nos dados
  const categoryData = bateriasData.baterias.find((cat) => cat.tipo === categoria)

  if (!categoryData) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <CategoryPage categoryData={categoryData} />
    </div>
  )
}

// Gerar páginas estáticas para todas as categorias
export async function generateStaticParams() {
  return bateriasData.baterias.map((categoria) => ({
    categoria: categoria.tipo,
  }))
}
