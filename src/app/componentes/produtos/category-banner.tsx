import Image from "next/image"

interface CategoryBannerProps {
  title: string
  description: string
  image: string
}

export default function CategoryBanner({ title, description, image }: CategoryBannerProps) {
  return (
    <div className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      {/* Background Image */}
      <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" priority sizes="100vw" />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center text-center text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">{title}</h1>
          <p className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  )
}
