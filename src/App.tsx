import { CartProvider } from "./context/CartProvider";
import Navigation from "./routes/Navigation";



function App(): JSX.Element {
  return (
    <CartProvider>
      <Navigation />
    </CartProvider>
  );
}

export default App;
