import { LazyExoticComponent } from 'react';
import { All, Sport } from '../Components/Pages';
import { CartPage } from '../Components/Pages/cart/CartPage/CartPage';



type JSXComponent = () => JSX.Element

interface Routes {
  path: string;
  to: string;
  Component: JSXComponent | LazyExoticComponent<JSXComponent>;
  name?: string
}

export const route: Routes[] = [
  {
    path: "all",
    to: "all",
    Component: All,
    name: "Todo"
  },
  /*   {
      path: "sports",
      to: "sports",
      Component: Sport,
      name: "Deportes"
    }, */
  {
    path: "cart",
    to: "cart",
    Component: CartPage,
  },
]