import { render, screen } from "@testing-library/react";
import { CartProvider } from "../../../../context/CartProvider";
import { CartPage } from "./CartPage";


describe('CartPage Component', () => {
  test('should be in initial state', () => {
    render(
      
      <CartProvider>
        <CartPage />
      </CartProvider>
    )
    const btn = screen.getByRole("button", {name: "Pagar"})

    expect(btn).toBeDisabled()
    expect(screen.getByText("Total: $ 0")).toBeInTheDocument()
    
  });
});