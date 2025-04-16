"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import SolutionBox from "./SolutionBox";
import Link from "next/link";

const solutionsData = [
  {
    id: 1,
    solution: "GI-Resíduos",
    offerList: [
      "Plataforma completa para gestão integrada de resíduos",
      "Centralização de dados e processos",
      "Eficiência na administração dos resíduos gerados",
    ],
  },
  {
    id: 2,
    solution: "GI-Gov",
    offerList: [
      "Solução para órgãos públicos monitorarem resíduos",
      "Fiscalização eficiente das atividades",
      "Apoio à gestão ambiental governamental",
    ],
  },
  {
    id: 3,
    solution: "GI-Compliance",
    offerList: [
      "Sistema para garantir conformidade com legislações ambientais",
      "Suporte ao cumprimento de legislações ambientais",
      "Redução de riscos jurídicos e ambientais",
    ],
  },
  {
    id: 4,
    solution: "Gestão de Resíduos em Eventos",
    offerList: [
      "Solução especializada para eventos de qualquer porte",
      "Garantia de destinação correta dos resíduos",
      "Logística eficiente e sustentabilidade certificada",
    ],
  },
  {
    id: 5,
    solution: "Pesquisa e Desenvolvimento (P&D)",
    offerList: [
      "Consultoria estratégica para inovação em processos sustentáveis",
      "Criação de novas soluções ambientais",
      "Desenvolvimento de tecnologias para gestão ambiental",
    ],
  },
];

const Pricing = () => {
  return (
    <section id="produtos" className="relative z-10 py-20">
      <div className="container">
        <SectionTitle
          title="Conheça nossas soluções para transformar sua gestão de resíduos."
          center
          width="800px"
          mb="60px"
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
          {solutionsData.slice(0, 3).map((solutionData) => (
            <SolutionBox key={solutionData.id} solution={solutionData.solution}>
              {solutionData.offerList.map((offer, idx) => (
                <OfferList key={idx} text={offer} status="active" />
              ))}
            </SolutionBox>
          ))}

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:col-span-3 lg:grid-cols-2">
            {solutionsData.slice(3, 5).map((solutionData) => (
              <SolutionBox
                key={solutionData.id}
                solution={solutionData.solution}
              >
                {solutionData.offerList.map((offer, idx) => (
                  <OfferList key={idx} text={offer} status="active" />
                ))}
              </SolutionBox>
            ))}
          </div>
        </div>

        <div className="mt-15 flex w-full flex-col items-center justify-center space-y-4 sm:w-auto sm:flex-row sm:space-y-0 sm:space-x-4">
          <Link
            href="https://api.whatsapp.com/send?1=pt_BR&phone=5588998611658"
            className="bg-primary hover:bg-primary/80 w-full rounded-xs px-25 py-6 text-center text-xl font-semibold text-white duration-300 ease-in-out sm:w-auto"
          >
            Veja como funciona
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4F9530" />
              <stop offset="1" stopColor="#4F9530" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4F9530" />
              <stop offset="1" stopColor="#4F9530 " stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
