import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
      >
        <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          >
            <source src="/videos/hero-video.mp4" type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>

          <div className="absolute inset-0 bg-black/75"></div>
        </div>

        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[900px] text-center">
                <h1 className="mb-5 text-2xl leading-tight font-bold text-white sm:text-4xl sm:leading-tight md:text-4xl md:leading-tight">
                  Resíduos não são problema. São oportunidade. Gerencie com
                  inteligência, aumente os seus lucros e esteja em conformidade
                  com as leis
                </h1>
                <p className="mb-12 text-base leading-relaxed! font-medium text-white/90 sm:text-lg md:text-2xl">
                  Plataformas e soluções para transformar sua gestão de resíduos
                  em eficiência, conformidade e sustentabilidade real.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                  <Link
                    href="https://sistema.gir.eco.br/register"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary hover:bg-primary/80 rounded-lg px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out"
                  >
                    Quero uma demonstração
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
