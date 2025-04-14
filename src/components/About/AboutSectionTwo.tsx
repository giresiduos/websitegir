"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SectionTitle from "../Common/SectionTitle";
import Link from "next/link";


const slidesData = [
  {
    id: 1,
    title: "Cadastro Simples",
    paragraph:
      "Insira as informações da sua empresa e gere relatórios automatizados.",
    image: '/images/about/about-image-2-dark.svg',
  },
  {
    id: 2,
    title: "Monitoramento Inteligente",
    paragraph:
      "Tenha controle total sobre a geração, transporte e destinação dos resíduos.",
    image: '/images/about/about-image-2-dark.svg',
  },
  {
    id: 3,
    title: "Relatórios e Compliance",
    paragraph:
      "Gere documentos e atenda às exigências ambientais de forma automatizada.",
    image: '/images/about/about-image-2-dark.svg',
  },
  {
    id: 4,
    title: "Economia e Sustentabilidade",
    paragraph:
      "Reduza desperdícios, otimize processos e aumente seus lucros.",
    image: '/images/about/about-image-2-dark.svg',
  },
];

const AboutSectionTwo = () => {
  return (
    <section className="pt-20">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <SectionTitle
            title="Simplicidade, automação e resultados reais."
            center
            mb="10px"
          />

          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            // autoplay={{
            //   delay: 2500,
            //   disableOnInteraction: false,
            // }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="about-swiper"
          >
            {slidesData.map(data=>(
              <SwiperSlide key={data.id}>
                <div className="flex flex-col items-center px-5 py-10">
                  <div className="w-full max-w-2xl mb-3 text-center">
                    <div className="mb-9">
                      <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                        {data.title}
                      </h3>
                      <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
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
                        className="object-contain drop-shadow-three"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 mt-15">
            <Link
              href="https://nextjstemplates.com/templates/saas-starter-startup"
              className="rounded-xs bg-primary px-25 py-6 text-xl font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
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