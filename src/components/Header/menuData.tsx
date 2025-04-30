import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Início",
    path: "#home",
    newTab: false,
  },
  {
    id: 2,
    title: "Diferenciais",
    path: "#diferenciais",
    newTab: false,
  },
  {
    id: 3,
    title: "Como Funciona",
    path: "#funcionamento",
    newTab: false,
  },
  {
    id: 4,
    title: "Produtos",
    path: "#produtos",
    newTab: false,
  },
  // {
  //   id: 5,
  //   title: "Resultados",
  //   path: "#resultados",
  //   newTab: false,
  // },
  // {
  //   id: 6,
  //   title: "Blog",
  //   path: "#blog",
  //   newTab: false,
  // },
  {
    id: 7,
    title: "Mais",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Sobre Nós",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "Blog",
        path: "/blog",
        newTab: false,
      },
      {
        id: 43,
        title: "Contato",
        path: "/contact",
        newTab: false,
      },
    ],
  },
];
export default menuData;
