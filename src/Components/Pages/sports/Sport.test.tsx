import { render, screen, act } from "@testing-library/react";
import { CartProvider } from "../../../context/CartProvider";
import { Sport } from "./Sport";




describe('Sport Component', () => {
  test('should ', async () => {
    
    await act(async () => {
      render(
        <CartProvider>
          <Sport />
        </CartProvider>
      )
    })
    expect(await screen.findByText("Iphone")).toBeInTheDocument()

  });
});