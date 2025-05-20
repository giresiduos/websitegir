"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SectionTitle from "../Common/SectionTitle";
import Link from "next/link";
import slidesData from "./slidesData";

const AboutSectionTwo = () => {
  return (
    <section className="pt-20" id="funcionamento">
      <div className="container">
        <div className="border-body-color/[.15] border-b pb-16 md:pb-20 lg:pb-28 dark:border-white/[.15]">
          <SectionTitle
            title="Simplicidade, automação e resultados reais."
            center
            width="800px"
            mb="10px"
          />

          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            speed={800}
            cssMode={true}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
              waitForTransition: true,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation, EffectFade]}
            className="about-swiper"
          >
            {slidesData.map((data) => (
              <SwiperSlide key={data.id}>
                <div className="flex flex-col items-center px-5 py-10">
                  <div className="mb-3 w-full max-w-2xl text-center">
                    <div className="mb-9">
                      <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
                        {data.title}
                      </h3>
                      <p className="text-body-color text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
                        {data.paragraph}
                      </p>
                    </div>
                  </div>

                  <div className="w-full max-w-[500px]">
                    <div className="relative aspect-[25/24] w-full">
                      <Image
                        src={data.image}
                        alt="slide 2 image"
                        fill
                        className="drop-shadow-three object-contain"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="mt-15 flex w-full flex-col items-center justify-center space-y-4 sm:w-auto sm:flex-row sm:space-y-0 sm:space-x-4">
            <Link
              href="https://sistema.gir.eco.br/register"
              className="bg-primary hover:bg-primary/80 w-full rounded-xs px-10 py-6 text-center text-xl font-semibold text-white duration-300 ease-in-out sm:w-auto"
            >
              Solicitar Demonstração Agora
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
