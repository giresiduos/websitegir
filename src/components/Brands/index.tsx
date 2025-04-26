'use client';

import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';

const Brands = () => {
  return (
    <section className="mt-15">
      <div className="container">
      <Swiper
        slidesPerView={3} // Mostra 3 slides ao mesmo tempo (ajuste conforme necessário)
        spaceBetween={10} // Reduz o espaço entre os slides (ajuste conforme necessário)
        loop={true}
        centeredSlides={true} // Centraliza o slide ativo
        speed={1000} // Define a velocidade do slide em milissegundos
        // transitionTimingFunction="ease-in-out" // REMOVA ESTA LINHA
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {brandsData.map((brand) => (
          <SwiperSlide key={brand.id}>
            <SingleBrand brand={brand} />
          </SwiperSlide>
        ))}
</Swiper>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, imageLight, name } = brand;

  return (
    <div className="flex items-center justify-center p-4">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-40 w-40 md:h-52 md:w-52 opacity-70 transition hover:opacity-100 dark:opacity-60 dark:hover:opacity-100" // Aumentei o tamanho das imagens
      >
        <Image src={imageLight} alt={name} fill className="hidden dark:block object-contain" />
        <Image src={image} alt={name} fill className="block dark:hidden object-contain" />
      </a>
    </div>
  );
};