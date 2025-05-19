"use client";

import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData"; // Assumindo que brandsData está neste caminho
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

const Brands = () => {
  return (
    <section className="mt-15">
      <div className="container">
        <Swiper
          breakpoints={{
            // quando a largura da viewport >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            // quando a largura da viewport >= 480px
            480: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            // quando a largura da viewport >= 768px
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          loop={true}
          centeredSlides={true} // Centraliza o slide ativo
          speed={1000} // Define a velocidade do slide em milissegundos
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
  const imgStyle =
    "relative h-60 w-60 sm:h-60 sm:w-60 md:h-60 md:w-60 lg:h-52 lg:w-52 opacity-90 transition hover:opacity-100 dark:opacity-80 dark:hover:opacity-100 hover:scale-105";
  return (
    <div className="flex items-center justify-center p-2 sm:p-4">
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="nofollow noreferrer"
          className={imgStyle}
        >
          <Image
            src={imageLight}
            alt={name}
            fill
            className="hidden object-contain contrast-125 dark:block dark:brightness-110"
          />
          <Image
            src={image}
            alt={name}
            fill
            className="block object-contain contrast-110 dark:hidden"
          />
        </a>
      ) : (
        <div className={imgStyle}>
          <Image
            src={imageLight}
            alt={name}
            fill
            className="hidden object-contain contrast-125 dark:block dark:brightness-110"
          />
          <Image
            src={image}
            alt={name}
            fill
            className="block object-contain contrast-110 dark:hidden"
          />
        </div>
      )}
    </div>
  );
};
