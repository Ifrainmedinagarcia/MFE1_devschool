import { render, act, screen } from "@testing-library/react";
import { All } from "./All";
import { CartProvider } from "../../../context/CartProvider";




describe('All component', () => {
  test('should render without problems', async () => {
    await act(async () => {
      render(
        <CartProvider>
          <All />
        </CartProvider>
      )
    })
    expect(await screen.findByText("Iphone")).toBeInTheDocument()
  });

});