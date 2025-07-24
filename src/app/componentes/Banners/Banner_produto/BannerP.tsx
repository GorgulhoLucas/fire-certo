"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import Image from 'next/image';
import BannerText from './BannertxtP';

const Banner = () => {
  return (
    <div className="relative text-center h-[630px] w-full">
      <BannerText />

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation
        className="h-full w-full"
      >
        {/* Primeiro Slide */}
        <SwiperSlide>
          <div className="relative h-full w-full">
            <Image
              src="/images/firee.png"
              alt="Banner de Fire Baterias 1"
              layout="responsive"
              width={1920}
              height={600}
              objectFit="cover"
              priority={true} // carrega a imagem com prioridade para banners
            />
          </div>
        </SwiperSlide>

        {/* Segundo Slide */}
        <SwiperSlide>
          <div className="relative h-full w-full">
            <Image
              src="/images/firee.png"
              alt="Banner de Fire Baterias 2"
              layout="responsive"
              width={1920}
              height={600}
              objectFit="cover"
              priority={true}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
