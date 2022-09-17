import { render, screen, fireEvent } from "@testing-library/react";
import { CartProvider } from "../../context/CartProvider";
import { Card } from "./Card";
import { products } from '../../test-utils/responses';


const { id, images, price, title } = products[0]

describe('Name of the group', () => {
  test('should ', () => {
    render(
      <CartProvider>
        <Card id={id} images={images} price={price} title={title} product={products[0]} />
      </CartProvider>
    )
    const btn = screen.getByRole("button", { name: "Add to cart" })
    fireEvent.click(btn)
    
    expect(btn).toBeInTheDocument()

  });
});