
const { createMemoryHistory } = require("history");
import { render, screen, fireEvent, act } from '@testing-library/react';
import { Router } from "react-router-dom";
import App from "./App";
import { getAllProducts } from "./clients/All/getAllProducts";
import { CartProvider } from "./context/CartProvider";
import { products } from "./test-utils/responses";

jest.mock("./clients/All/getAllProducts")
const getProducts = getAllProducts as jest.Mock

describe('Test Integretion', () => {
  const history = createMemoryHistory();
  beforeEach(async () => {
    getProducts.mockResolvedValue(products);
    await act(async () => {
      render(
          <CartProvider>
            <Router location={"/"} navigator={history}>
              <App />
            </Router>
          </CartProvider>
      )
    })
  })

  test('should be with INITIAL STATE', async () => {
    expect(history.location.pathname).toBe('/');
    expect(await screen.findByText("test")).toBeInTheDocument()
  });

  test('should add new product into the cart', async () => {
    const btn = await screen.findByRole("button", { name: "Add to cart" })
    fireEvent.click(btn)
    expect(screen.getByText("1")).toBeInTheDocument()
  })

  test('should redirec to cart page', async () => {
    const btn = await screen.findByRole("button", { name: "Add to cart" })
    const btnCart = screen.getByTestId("cart__btn")

    fireEvent.click(btn)
    fireEvent.click(btnCart)

    expect(history.location.pathname).toBe('/cart');

  });
});