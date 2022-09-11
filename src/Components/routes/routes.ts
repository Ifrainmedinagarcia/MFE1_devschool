import { Home, Accessories, Shoes, Sport } from "../Pages";



type JSXComponent = () => JSX.Element

interface Route {
  path: string;
  to: string;
  Component?: JSXComponent;
  name: string
}

export const routes: Route[] = [
  {
    path: "/",
    to: "/",
    Component: Home,
    name: "Todo"
  },
  {
    path: "/calzado",
    to: "/calzado",
    Component: Shoes,
    name: "Calzado"
  },
  {
    path: "/deporte",
    to: "/deporte",
    Component: Sport,
    name: "Deporte"
  },
  {
    path: "/accesorios",
    to: "/accesorios",
    Component: Accessories,
    name: "Accesorios"
  },

]