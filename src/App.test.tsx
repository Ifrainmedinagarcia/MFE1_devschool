
const { createMemoryHistory } = require("history");
import { render, screen, fireEvent, act } from '@testing-library/react';
import { Router } from "react-router-dom";
import App from "./App";
import { CartProvider } from "./context/CartProvider";


describe('Test Integretion', () => {
  const history = createMemoryHistory();
  beforeEach(async () => {
    await act(async () => {
      render(
          <CartProvider>
            <Router location={"/all"} navigator={history}>
              <App />
            </Router>
          </CartProvider>
      )
    })
  })

  test('should be with INITIAL STATE', async () => {
    expect(history.location.pathname).toBe('/');
    expect(await screen.findByText("Iphone")).toBeInTheDocument()
  });

  test('should add new product into the cart', async () => {
    const btn = screen.getAllByRole("button", { name: "Add to cart" })
    fireEvent.click(btn[0])
    expect(screen.getByText("1")).toBeInTheDocument()
  })

  test('should redirec to cart page', async () => {
    const btn = screen.getAllByRole("button", { name: "Add to cart" })
    const btnCart = screen.getByTestId("cart__btn")

    fireEvent.click(btn[0])
    fireEvent.click(btnCart)

    expect(history.location.pathname).toBe('/cart');

  });
});