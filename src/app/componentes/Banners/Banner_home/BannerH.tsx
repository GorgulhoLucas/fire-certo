"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules"
import "swiper/css"
import "swiper/css/autoplay"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-fade"
import Image from "next/image"
import BannerText from "../../ui/banner-text"

const bannerSlides = [
  {
    id: 1,
    image: "/home/banner_home1.svg",
    alt: "Bateria automotiva - Banner 1",
  },
  {
    id: 2,
    image: "/home/banner_home2.svg",
    alt: "Bateria automotiva - Banner 2",
  },
]


const Banner = () => {
  return (
    <div className="relative w-full h-[350px] md:h-[550px] lg:h-[650px] overflow-hidden">
      <BannerText />

      <Swiper
        modules={[Navigation, Autoplay, Pagination, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet-custom",
          bulletActiveClass: "swiper-pagination-bullet-active-custom",
        }}
        className="h-full w-full"
        speed={1000}
      >
        {bannerSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full">
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={slide.alt}
                fill
                className="object-cover"
                priority={slide.id === 1}
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navegação profissional */}
      <button className="swiper-button-prev-custom absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-red-600/80 hover:bg-red-600 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 shadow-lg group">
        <svg
          className="w-6 h-6 text-white group-hover:scale-110 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button className="swiper-button-next-custom absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-red-600/80 hover:bg-red-600 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 shadow-lg group">
        <svg
          className="w-6 h-6 text-white group-hover:scale-110 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicadores elegantes */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {bannerSlides.map((_, index) => (
          <div
            key={index}
            className="swiper-pagination-bullet-custom w-3 h-3 bg-white/60 rounded-full cursor-pointer transition-all duration-300 hover:bg-white/80 shadow-sm"
          />
        ))}
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet-active-custom {
          background-color: rgba(220, 20, 60, 0.9) !important;
          transform: scale(1.3);
          box-shadow: 0 0 10px rgba(220, 20, 60, 0.5);
        }
      `}</style>
    </div>
  )
}

export default Banner
