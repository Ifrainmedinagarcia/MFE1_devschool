import { All, Shoes } from '../Pages';
import { LazyExoticComponent } from 'react';
import { Sport } from '../Pages/sports/Sport';



type JSXComponent = () => JSX.Element

interface Route {
  path: string;
  to: string;
  Component: JSXComponent | LazyExoticComponent<JSXComponent>;
  name: string
}

export const routes: Route[] = [
  {
    path: "all",
    to: "all",
    Component: All,
    name: "Todo"
  },
  {
    path: "sports",
    to: "sports",
    Component: Sport,
    name: "Deportes"
  },
  {
    path: "shoes",
    to: "shoes",
    Component: Shoes,
    name: "Zapatos"
  }
]