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
const AboutSection = () => {
  const FontBold = ({ text }) => (
    <span className="font-bold text-black dark:text-white">{text}</span>
  );

  return (
    <section id="about" className="pt-16 pb-26">
      <div className="container">
        <p className="text-body-color mb-6 text-justify text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
          A {FontBold({ text: "GIR" })}, startup inovadora criada em 2019 no
          coração de Juazeiro do Norte, Ceará, nasceu com uma{" "}
          {FontBold({ text: "Missão" })} clara: Tornar-se referência no tocante
          à educação ambiental e à economia circular através de iniciativas
          tecnológicas.
        </p>

        <p className="text-body-color mb-6 text-justify text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
          Sua {FontBold({ text: "Visão" })} é ambiciosa e bem definida:
          Desenvolver soluções práticas e tecnológicas no tocante a gestão de
          resíduos, integrando todos os envolvidos e adequando a legislação
          ambiental vigente embasados na Política Nacional de Resíduos Sólidos -
          Lei Federal 12.305/2010, bem como nas boas práticas adotadas pelo
          coletivo Lixo Zero Brasil.
        </p>

        <p className="text-body-color mb-6 text-justify text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
          Os {FontBold({ text: "Valores" })} que norteiam a GIR refletem um
          profundo compromisso: Respeito ao meio ambiente e às pessoas que o
          compõem, qualificação técnica do time e parceiros, respeito ao nosso
          time, ética e transparência, honestidade, estímulo à inovação,
          transparência nas tarefas, incentivo aos ESG / ODS e excelência
          operacional no tocante ao cenário ambiental.
        </p>

        <p className="text-body-color mb-6 text-justify text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
          O {FontBold({ text: "Objetivo" })} primordial da GIR é inspirador e
          pragmático: Fomentar a gestão de resíduos por meio de boas práticas
          transmitidas pela educação ambiental para que essa torne possível a
          reconstrução de um meio ambiente de fato saudável, seja para a geração
          atual e principalmente às futuras. Além disso, dar assistência às
          empresas e órgãos públicos diante da destinação correta dos seus
          resíduos e rejeitos, sem burocracia, de forma rápida e prática, pois
          acreditamos que juntos sempre seremos mais fortes.
        </p>

        <p className="text-body-color mb-6 text-justify text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
          A GIR concretiza essa missão, visão e objetivos ao integrar toda a
          complexa cadeia de resíduos sólidos através de seu software
          proprietário, o {FontBold({ text: "GI-RESÍDUOS" })}. Essa solução
          inteligente promove uma relação mais eficiente e colaborativa entre
          empresas, a população, valiosos agentes ambientais (catadores) e
          órgãos públicos, pavimentando o caminho para uma{" "}
          {FontBold({ text: "economia circular" })}
          robusta, significativa{" "}
          {FontBold({ text: "redução de custos operacionais" })} e uma{" "}
          {FontBold({ text: "educação ambiental" })} de alta qualidade e real
          efetividade.
        </p>

        {/* <div className="mx-auto mb-6 flex aspect-25/24 max-w-[500px] justify-center">
          <Image
            src="/images/about/about-image.svg"
            alt="about-image"
            width={500}
            height={480}
            className="drop-shadow-three max-w-full dark:hidden dark:drop-shadow-none"
          />
          <Image
            src="/images/about/about-image-dark.svg"
            alt="about-image"
            width={500}
            height={480}
            className="drop-shadow-three hidden max-w-full dark:block dark:drop-shadow-none"
          />
        </div> */}

        <p className="text-body-color mb-6 text-justify text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
          Pioneira ao ser incubada na{" "}
          {FontBold({ text: "UFCA - Universidade Federal do Cariri" })}, campus
          Juazeiro do Norte, a GIR fortaleceu sua base através da valiosa
          participação técnica do corpo docente universitário. A equipe
          fundadora reúne a expertise de Caio Alves (Engenheiro Civil - COO) e
          Willy Brandt (Analista de Sistemas - CEO/CTO), além de uma equipe de
          desenvolvimento de software e o conhecimento técnico de três
          professores: Gorethe (Engenheira Civil, Gestão Ambiental, Saneamento
          Básico - UFCA), Joelma (Engenheira Ambiental - Gestão de Resíduos -
          IFCE) e Thiago (Analista de Sistemas, TIC na Educação - UFCA).
        </p>

        <p className="text-body-color mb-6 text-justify text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
          Um {FontBold({ text: "diferencial crescente" })} e{" "}
          {FontBold({ text: "significativo" })} da GIR reside em sua atuação
          engajada junto ao terceiro setor, abrangendo agentes ambientais
          individuais, associações e cooperativas de catadores. Acreditamos
          firmemente, e comprovamos em nossos projetos, que a educação em seu
          sentido mais amplo impulsiona nosso negócio, conferindo-nos uma
          {FontBold({ text: "vantagem competitiva" })} notável em relação aos
          concorrentes.
        </p>

        {/* <div className="mx-auto mb-6 flex aspect-25/24 max-w-[500px] justify-center">
          <Image
            src="/images/about/about-image.svg"
            alt="about-image"
            width={500}
            height={480}
            className="drop-shadow-three max-w-full dark:hidden dark:drop-shadow-none"
          />
          <Image
            src="/images/about/about-image-dark.svg"
            alt="about-image"
            width={500}
            height={480}
            className="drop-shadow-three hidden max-w-full dark:block dark:drop-shadow-none"
          />
        </div> */}

        <p className="text-body-color mb-6 text-justify text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
          Alinhada com sua missão, visão, valores e objetivos, a GIR busca
          aprimoramento contínuo através das seguintes avenidas:
        </p>

        {aboutData.map((item) => (
          <div key={item.title} className="mb-6">
            <h3 className="mb-2 text-base font-bold text-black sm:text-lg dark:text-white">
              {item.title}
            </h3>
            <p className="text-body-color text-justify text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}

        <p className="text-body-color text-justify text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
          Com uma base tão sólida e um propósito tão claro, a GIR está bem
          posicionada para gerar um impacto ainda maior na gestão de resíduos
          sólidos, alinhada com seus valores e objetivos de construir um futuro
          mais sustentável para as próximas gerações, aqui em Juazeiro do Norte
          e além.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
