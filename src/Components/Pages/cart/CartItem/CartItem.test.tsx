import { render, screen, fireEvent } from "@testing-library/react";
import { products } from "../../../../test-utils/responses";
import CartItem from "./CartItem";
import { CartProvider } from '../../../../context/CartProvider';


describe('CartItem Component', () => {
  test('should render without problems', async () => {
    render(
      <CartProvider>
        <CartItem product={products[0]} />
      </CartProvider>
    )
    expect(await screen.findByText("test:")).toBeInTheDocument()
  });
  test('should delete the item', async () => {
    render(
      <CartProvider>
        <CartItem product={products[0]} />
      </CartProvider>
    )
    const btnDelete = screen.getByRole("button", { name: "delete" })
    fireEvent.click(btnDelete)
  });
});