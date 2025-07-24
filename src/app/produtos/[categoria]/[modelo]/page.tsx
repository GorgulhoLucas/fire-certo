import { notFound } from "next/navigation"
import ProductGrid from "@/app/componentes/produtos/product-grid"
import bateriasData from '@/app/componentes/Data/baterias.json'

interface ModelPageProps {
  params: {
    categoria: string
    modelo: string
  }
}

export default function ModelPage({ params }: ModelPageProps) {
  const { categoria, modelo } = params

  // Encontrar a categoria
  const categoryData = bateriasData.baterias.find((cat) => cat.tipo === categoria)

  if (!categoryData) {
    notFound()
  }

  // Encontrar o modelo
  const modelData = categoryData.modelos.find((mod) => mod.id === modelo)

  if (!modelData) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Model Header */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{modelData.titulo}</h1>
          <p className="text-xl text-gray-300">{modelData.descricao}</p>
        </div>
      </div>

      <ProductGrid produtos={modelData.produtos} categoria={categoria} modelo={modelo} modelTitle={modelData.titulo} />
    </div>
  )
}

// Gerar páginas estáticas
export async function generateStaticParams() {
  const params: { categoria: string; modelo: string }[] = []

  bateriasData.baterias.forEach((categoria) => {
    categoria.modelos.forEach((modelo) => {
      params.push({
        categoria: categoria.tipo,
        modelo: modelo.id,
      })
    })
  })

  return params
}
