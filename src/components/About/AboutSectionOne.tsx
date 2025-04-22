import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="text-body-color mb-5 flex items-center text-lg font-medium">
      <span className="bg-primary/10 text-primary mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="pb-16 md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            {/* <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Crafted for Startup, SaaS and Business Sites."
                paragraph="The main ‘thrust’ is to focus on educating attendees on how to best protect highly vulnerable business applications with interactive panel discussions and roundtables."
                mb="44px"
              />

              <div
                className="mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Premium quality" />
                    <List text="Tailwind CSS" />
                    <List text="Use for lifetime" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Next.js" />
                    <List text="Rich documentation" />
                    <List text="Developer friendly" />
                  </div>
                </div>
              </div>
            </div> */}
            <div className="max-w-[650px]">
              <p className="text-body-color mb-6 text-justify text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
                A GIR, startup inovadora criada em 2019 no coração de Juazeiro
                do Norte, Ceará, nasceu com uma Missão clara: Tornar-se
                referência no tocante à educação ambiental e à economia circular
                através de iniciativas tecnológicas.
              </p>

              <p className="text-body-color mb-6 text-justify text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
                Sua Visão é ambiciosa e bem definida: Desenvolver soluções
                práticas e tecnológicas no tocante a gestão de resíduos,
                integrando todos os envolvidos e adequando a legislação
                ambiental vigente embasados na Política Nacional de Resíduos
                Sólidos - Lei Federal 12.305/2010, bem como nas boas práticas
                adotadas pelo coletivo Lixo Zero Brasil. Os Valores que norteiam
                a GIR refletem um profundo compromisso: Respeito ao meio
                ambiente e às pessoas que o compõem, qualificação técnica do
                time e parceiros, respeito ao nosso time, ética e transparência,
                honestidade, estímulo à inovação, transparência nas tarefas,
                incentivo aos ESG / ODS e excelência operacional no tocante ao
                cenário ambiental.
              </p>

              <p className="text-body-color mb-6 text-justify text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
                O Objetivo primordial da GIR é inspirador e pragmático: Fomentar
                a gestão de resíduos por meio de boas práticas transmitidas pela
                educação ambiental para que essa torne possível a reconstrução
                de um meio ambiente de fato saudável, seja para a geração atual
                e principalmente às futuras. Além disso, dar assistência às
                empresas e órgãos públicos diante da destinação correta dos seus
                resíduos e rejeitos, sem burocracia, de forma rápida e prática,
                pois acreditamos que juntos sempre seremos mais fortes.
              </p>

              <p className="text-body-color mb-6 text-justify text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
                A GIR concretiza essa missão, visão e objetivos ao integrar toda
                a complexa cadeia de resíduos sólidos através de seu software
                proprietário, o GI-RESÍDUOS. Essa solução inteligente promove
                uma relação mais eficiente e colaborativa entre empresas, a
                população, valiosos agentes ambientais (catadores) e órgãos
                públicos, pavimentando o caminho para uma economia circular
                robusta, significativa redução de custos operacionais e uma
                educação ambiental de alta qualidade e real efetividade.
              </p>

              {/* {aboutData.map((item) => (
                <div key={item.title} className="mb-6">
                  <h3 className="mb-2 text-lg font-bold text-black dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-body-color text-justify text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))} */}
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-25/24 max-w-[500px] lg:mr-0">
                <Image
                  src="/images/about/about-image.svg"
                  alt="about-image"
                  fill
                  className="drop-shadow-three mx-auto max-w-full lg:mr-0 dark:hidden dark:drop-shadow-none"
                />
                <Image
                  src="/images/about/about-image-dark.svg"
                  alt="about-image"
                  fill
                  className="drop-shadow-three mx-auto hidden max-w-full lg:mr-0 dark:block dark:drop-shadow-none"
                />
              </div>
            </div>
          </div>
          <p className="text-body-color mb-6 text-justify text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
            Pioneira ao ser incubada na UFCA - Universidade Federal do Cariri,
            campus Juazeiro do Norte, a GIR fortaleceu sua base através da
            valiosa participação técnica do corpo docente universitário. A
            equipe fundadora reúne a expertise de Caio Alves (Engenheiro Civil -
            COO) e Willy Brandt (Analista de Sistemas - CEO/CTO), além de uma
            equipe de desenvolvimento de software e o conhecimento técnico de
            três professores: Gorethe (Engenheira Civil, Gestão Ambiental,
            Saneamento Básico - UFCA), Joelma (Engenheira Ambiental - Gestão de
            Resíduos - IFCE) e Thiago (Analista de Sistemas, TIC na Educação -
            UFCA).
          </p>

          <p className="text-body-color mb-6 text-justify text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
            Um diferencial crescente e significativo da GIR reside em sua
            atuação engajada junto ao terceiro setor, abrangendo agentes
            ambientais individuais, associações e cooperativas de catadores.
            Acreditamos firmemente, e comprovamos em nossos projetos, que a
            educação em seu sentido mais amplo impulsiona nosso negócio,
            conferindo-nos uma vantagem competitiva notável em relação aos
            concorrentes.
          </p>

          <p className="text-body-color mb-6 text-justify text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
            Um diferencial crescente e significativo da GIR reside em sua
            atuação engajada junto ao terceiro setor, abrangendo agentes
            ambientais individuais, associações e cooperativas de catadores.
            Acreditamos firmemente, e comprovamos em nossos projetos, que a
            educação em seu sentido mais amplo impulsiona nosso negócio,
            conferindo-nos uma vantagem competitiva notável em relação aos
            concorrentes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
