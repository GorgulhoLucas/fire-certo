import { notFound } from "next/navigation"
import ProductDetails from "@/app/componentes/produtos/product-details"
import bateriasData from '@/app/componentes/Data/baterias.json'

interface ProductPageProps {
  params: {
    categoria: string
    modelo: string
    produto: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const { categoria, modelo, produto } = params

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

  // Encontrar o produto
  const productData = modelData.produtos.find((prod) => prod.codigo === produto)

  if (!productData) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <ProductDetails produto={productData} categoria={categoryData.titulo} modelo={modelData.titulo} />
    </div>
  )
}

// Gerar páginas estáticas
export async function generateStaticParams() {
  const params: { categoria: string; modelo: string; produto: string }[] = []

  bateriasData.baterias.forEach((categoria) => {
    categoria.modelos.forEach((modelo) => {
      modelo.produtos.forEach((produto) => {
        params.push({
          categoria: categoria.tipo,
          modelo: modelo.id,
          produto: produto.codigo,
        })
      })
    })
  })

  return params
}
