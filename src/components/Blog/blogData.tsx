import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Guia Prático - Destinação seletiva de resíduos no seu dia a dia",
    paragraph: [
      "Convidamos você a explorar, neste ebook, um guia completo para o descarte adequado, desde a não geração até a destinação ambientalmente correta. Descubra o impacto positivo que estamos construindo nas comunidades diretamente do Cariri, Ceará - Brasil.",
      "Mergulhe conosco neste universo da Educação Ambiental",
    ],
    image: "/images/blog/ebook-gir.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["E-book"],
    publishDate: "2025",
  },
  // {
  //   id: 2,
  //   title: "9 simple ways to improve your design skills",
  //   paragraph:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
  //   image: "/images/blog/blog-02.jpg",
  //   author: {
  //     name: "Musharof Chy",
  //     image: "/images/blog/author-02.png",
  //     designation: "Content Writer",
  //   },
  //   tags: ["computer"],
  //   publishDate: "2025",
  // },
  // {
  //   id: 3,
  //   title: "Tips to quickly improve your coding speed.",
  //   paragraph:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
  //   image: "/images/blog/blog-03.jpg",
  //   author: {
  //     name: "Lethium Deo",
  //     image: "/images/blog/author-03.png",
  //     designation: "Graphic Designer",
  //   },
  //   tags: ["design"],
  //   publishDate: "2025",
  // },
];
export default blogData;
