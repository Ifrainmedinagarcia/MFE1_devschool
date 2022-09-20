import { render, screen, fireEvent } from '@testing-library/react';
import { CartContext } from "../../../../context/CartContext";
import { productsApi } from '../../../../db/Products';
import { CartState } from "../../../../interfaces/interfaces";
import { CartPage } from "./CartPage";


describe('CartPage Component', () => {
  const addToCart = jest.fn()
  const deleteProduct = jest.fn()
  const payProducts = jest.fn()

  test('should be in initial state', () => {
    const CartState = {
      productCount: 0,
      products: [],
      total: 0
    }
    render(
      <CartContext.Provider value={{ CartState, addToCart, deleteProduct, payProducts }}>
        <CartPage />
      </CartContext.Provider>
    )
    const btn = screen.getByRole("button", { name: "Pagar" })

    expect(btn).toBeDisabled()
    expect(screen.getByText("Total: $ 0")).toBeInTheDocument()

  });

  test('should show the success message', () => {
    const CartState: CartState = {
      productCount: 1,
      products: [productsApi[0]],
      total: 300
    }
    render(
      <CartContext.Provider value={{ CartState, addToCart, deleteProduct, payProducts }}>
        <CartPage />
      </CartContext.Provider>
    )
    const btn = screen.getByRole("button", { name: "delete" })

    fireEvent.click(btn)

    expect(deleteProduct).toHaveBeenCalled()
  });

  test('should show the success message', () => {
    const CartState: CartState = {
      productCount: 1,
      products: [productsApi[0]],
      total: 300
    }
    render(
      <CartContext.Provider value={{ CartState, addToCart, deleteProduct, payProducts }}>
        <CartPage />
      </CartContext.Provider>
    )
    const btn = screen.getByRole("button", { name: "Pagar" })
    fireEvent.click(btn)

    const successMessage = screen.getByText("Pagaste con éxito tus productos")

    expect(successMessage).toBeInTheDocument()

  });
});