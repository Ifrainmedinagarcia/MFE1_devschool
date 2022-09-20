import { render, screen, fireEvent } from "@testing-library/react";
import CartItem from "./CartItem";
import { CartProvider } from '../../../../context/CartProvider';
import { productsApi } from "../../../../db/Products";


describe('CartItem Component', () => {
  test('should render without problems', async () => {
    render(
      <CartProvider>
        <CartItem product={productsApi[0]} />
      </CartProvider>
    )
    expect(await screen.findByText("Iphone:")).toBeInTheDocument()
  });
  test('should delete the item', async () => {
    render(
      <CartProvider>
        <CartItem product={productsApi[0]} />
      </CartProvider>
    )
    const btnDelete = screen.getByRole("button", { name: "delete" })
    fireEvent.click(btnDelete)
  });
});