import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Image from "next/image";

import { Metadata } from "next";
import Link from "next/link";
import LeadsCaptureModal from "@/components/Ebook/LeadsCapture";

export const metadata: Metadata = {
  title: "Ebook - GIR",
  // description: "This is Blog Details Page for Startup Nextjs Template",
  // other metadata
};

const BlogDetailsPage = () => {
  return (
    <>
      <section className="pt-[150px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl leading-tight font-bold text-black sm:text-4xl sm:leading-tight dark:text-white">
                  Guia Prático - Destinação seletiva de resíduos no seu dia a
                  dia
                </h2>

                <div>
                  <p className="text-body-color mb-10 text-justify text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Mergulhe conosco neste universo da Educação Ambiental,
                    criado para capacitar e conscientizar a todos.
                  </p>
                  <div className="mb-10 w-full overflow-hidden rounded-sm">
                    <div className="relative aspect-97/60 w-full sm:aspect-97/44">
                      <Image
                        src="/images/blog/ebook-gir.jpg"
                        alt="image"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                  <p className="text-body-color mb-10 text-justify text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    A coleta seletiva é uma ação de gerenciamento de resíduos
                    sólidos que consiste na coleta diferenciada de resíduos
                    recicláveis, os quais já foram separados na fonte geradora.
                    Essa prática, mesmo quando realizada individualmente,
                    permite que os resíduos sólidos coletados possam ser
                    reutilizados ou reciclados, em vez de serem dispostos em
                    lixões ou aterros sanitários.
                  </p>
                  <p className="text-body-color mb-10 text-justify text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    O conceito de Lixo Zero refere-se à ideia de que é possível
                    chegar a um ponto em que não haja mais a necessidade de
                    descartar resíduos recicláveis e orgânicos, pois todos os
                    materiais serão reutilizados ou reciclados. O objetivo é
                    reduzir ao máximo o descarte de resíduos e diminuir o uso de
                    novas matérias-primas, aumentando a eficiência na utilização
                    de recursos e minimizando o impacto ambiental negativo.
                  </p>
                  <p className="text-body-color mb-10 text-justify text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    A coleta seletiva é uma parte importante na busca pelo Lixo
                    Zero.
                  </p>

                  <LeadsCaptureModal />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsPage;
