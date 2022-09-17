import { render, act, screen } from "@testing-library/react";
import { All } from "./All";
import { getAllProducts } from '../../../clients/All/getAllProducts';
import { products } from "../../../test-utils/responses";


jest.mock("../../../clients/All/getAllProducts")


const getProducts = getAllProducts as jest.Mock


describe('All component', () => {
  test('should render without problems', async () => {
    getProducts.mockResolvedValue(products);
    await act(async () => {
      render(
        <All />
      )
    })
    expect(await screen.findByText("test")).toBeInTheDocument()
  });

});