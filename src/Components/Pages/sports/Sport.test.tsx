import { render, screen, act } from "@testing-library/react";
import { getAllProducts } from "../../../clients/All/getAllProducts";
import { products } from "../../../test-utils/responses";
import { Sport } from "./Sport";


jest.mock("../../../clients/All/getAllProducts")


const getProducts = getAllProducts as jest.Mock

describe('Sport Component', () => {
  test('should ', async () => {
    getProducts.mockResolvedValue(products);
    await act(async () => {
      render(
        <Sport />
      )
    })
    expect(await screen.findByText("test")).toBeInTheDocument()

  });
});