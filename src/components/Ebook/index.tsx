import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
import Brands from "@/components/Brands";
import Image from "next/image";

const Ebook = () => {
  return (
    <section id="resultados" className="relative z-10 py-20">
      <div className="container">
        <SectionTitle
          title="A melhor informação para você inovar na gestão de resíduos."
          paragraph="Baixe nosso último e-book"
          center
          width="800px"
          mb="60px"
        />

        <div className="group shadow-one relative mx-auto max-w-[1000px] overflow-hidden rounded-xs duration-300">
          <Link
            href="/ebook"
            className="relative block aspect-37/22 max-h-[300px] w-full"
          >
            <span className="bg-primary absolute top-6 right-6 z-20 inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white capitalize">
              E-book
            </span>
            <Image
              src="/images/blog/ebook-gir.jpg"
              alt="image"
              fill
              className="object-cover"
            />
          </Link>

          <div className="p-6">
            <h3>
              <Link
                href="/ebook"
                className="hover:text-primary dark:hover:text-primary mb-4 block text-center text-xl font-bold text-black sm:text-2xl dark:text-white"
              >
                Guia Prático - Destinação seletiva de resíduos no seu dia a dia
              </Link>
            </h3>

            <p className="border-body-color/10 text-body-color mb-3 border-b pb-4 text-center text-base font-medium dark:border-white/10">
              Convidamos você a explorar, neste ebook, um guia completo para o
              descarte adequado, desde a não geração até a destinação
              ambientalmente correta. Descubra o impacto positivo que estamos
              construindo nas comunidades diretamente do Cariri, Ceará - Brasil.
            </p>

            <p className="border-body-color/10 text-body-color mb-3 border-b pb-4 text-center text-base font-medium dark:border-white/10">
              Mergulhe conosco neste universo da Educação Ambiental{" "}
            </p>

            <div className="flex w-full flex-col items-center justify-center space-y-4 sm:w-auto sm:flex-row sm:space-y-0 sm:space-x-4">
              <Link
                href="/ebook"
                className="bg-primary hover:bg-primary/80 w-full rounded-xs px-6 py-4 text-center text-lg font-semibold text-white duration-300 ease-in-out sm:w-auto"
              >
                Mais detalhes
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-5 right-0 z-[-1]">
        <svg
          width="238"
          height="531"
          viewBox="0 0 238 531"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="422.819"
            y="-70.8145"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(51.2997 422.819 -70.8145)"
            fill="url(#paint0_linear_83:2)"
          />
          <rect
            opacity="0.3"
            x="426.568"
            y="144.886"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(51.2997 426.568 144.886)"
            fill="url(#paint1_linear_83:2)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_83:2"
              x1="517.152"
              y1="-251.373"
              x2="517.152"
              y2="459.865"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4f9530" />
              <stop offset="1" stopColor="#4f9530" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_83:2"
              x1="455.327"
              y1="-35.673"
              x2="455.327"
              y2="675.565"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4f9530" />
              <stop offset="1" stopColor="#4f9530" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute bottom-5 left-0 z-[-1]">
        <svg
          width="279"
          height="106"
          viewBox="0 0 279 106"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5">
            <path
              d="M-57 12L50.0728 74.8548C55.5501 79.0219 70.8513 85.7589 88.2373 79.3692C109.97 71.3821 116.861 60.9642 156.615 63.7423C178.778 65.291 195.31 69.2985 205.911 62.3533C216.513 55.408 224.994 47.7682 243.016 49.1572C255.835 50.1453 265.278 50.8936 278 45.3373"
              stroke="url(#paint0_linear_72:302)"
            />
            <path
              d="M-57 1L50.0728 63.8548C55.5501 68.0219 70.8513 74.7589 88.2373 68.3692C109.97 60.3821 116.861 49.9642 156.615 52.7423C178.778 54.291 195.31 58.2985 205.911 51.3533C216.513 44.408 224.994 36.7682 243.016 38.1572C255.835 39.1453 265.278 39.8936 278 34.3373"
              stroke="url(#paint1_linear_72:302)"
            />
            <path
              d="M-57 23L50.0728 85.8548C55.5501 90.0219 70.8513 96.7589 88.2373 90.3692C109.97 82.3821 116.861 71.9642 156.615 74.7423C178.778 76.291 195.31 80.2985 205.911 73.3533C216.513 66.408 224.994 58.7682 243.016 60.1572C255.835 61.1453 265.278 61.8936 278 56.3373"
              stroke="url(#paint2_linear_72:302)"
            />
            <path
              d="M-57 35L50.0728 97.8548C55.5501 102.022 70.8513 108.759 88.2373 102.369C109.97 94.3821 116.861 83.9642 156.615 86.7423C178.778 88.291 195.31 92.2985 205.911 85.3533C216.513 78.408 224.994 70.7682 243.016 72.1572C255.835 73.1453 265.278 73.8936 278 68.3373"
              stroke="url(#paint3_linear_72:302)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_72:302"
              x1="256.267"
              y1="53.6717"
              x2="-40.8688"
              y2="8.15715"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4f9530" stopOpacity="0" />
              <stop offset="1" stopColor="#4f9530" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_72:302"
              x1="256.267"
              y1="42.6717"
              x2="-40.8688"
              y2="-2.84285"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4f9530" stopOpacity="0" />
              <stop offset="1" stopColor="#4f9530" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_72:302"
              x1="256.267"
              y1="64.6717"
              x2="-40.8688"
              y2="19.1572"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4f9530" stopOpacity="0" />
              <stop offset="1" stopColor="#4f9530" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_72:302"
              x1="256.267"
              y1="76.6717"
              x2="-40.8688"
              y2="31.1572"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4f9530" stopOpacity="0" />
              <stop offset="1" stopColor="#4f9530" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Ebook;
