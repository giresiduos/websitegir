import Image from "next/image";

const aboutData = [
  {
    title: "Escalabilidade Estratégica e Expansão Geográfica",
    text: "Desenvolver um plano robusto para replicar nosso sucesso em outras cidades e regiões, talvez através de parcerias estratégicas com outras universidades, prefeituras ou empresas do setor. Explorar modelos como o franqueamento ou licenciamento do GI-RESÍDUOS no longo prazo.",
  },
  {
    title: "Avanços Tecnológicos com IA e Integrações",
    text: "Integrar o poder da Inteligência Artificial e Machine Learning para otimizar processos como rotas de coleta e previsão de geração de resíduos. Facilitar a interoperabilidade do GI-RESÍDUOS com outros sistemas relevantes via APIs.",
  },
  {
    title: "Maximização do Impacto Socioambiental",
    text: "Refinar as métricas de impacto para quantificar precisamente nossos benefícios ambientais e sociais. Ampliar o alcance dos programas de educação ambiental através de plataformas digitais e iniciativas comunitárias. Explorar o papel do GI-RESÍDUOS na logística reversa e na responsabilidade estendida do produtor.",
  },
  {
    title: "Governança Robusta e Sustentabilidade Financeira",
    text: "Considerar a formação de um conselho consultivo com especialistas. Diversificar as fontes de receita do GI-RESÍDUOS e buscar investimentos estratégicos que se alinhem com nossa missão e visão.",
  },
];
const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-25/24 max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="about image"
                fill
                className="drop-shadow-three hidden dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[650px]">
              <p className="text-body-color mb-6 text-justify text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
                Alinhada com sua missão, visão, valores e objetivos, a GIR busca
                aprimoramento contínuo através das seguintes avenidas:
              </p>
              {aboutData.map((item) => (
                <div key={item.title} className="mb-6">
                  <h3 className="mb-2 text-lg font-bold text-black dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-body-color text-justify text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <p className="text-body-color mb-6 text-justify text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
            Com uma base tão sólida e um propósito tão claro, a GIR está bem
            posicionada para gerar um impacto ainda maior na gestão de resíduos
            sólidos, alinhada com seus valores e objetivos de construir um
            futuro mais sustentável para as próximas gerações, aqui em Juazeiro
            do Norte e além.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
