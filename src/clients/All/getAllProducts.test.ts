import { products } from "../../test-utils/responses";
import { getAllProducts } from "./getAllProducts";


async function mockGetProducts() {
  return {
    ok: true,
    status: 200,
    json: async () => products,
  };
}

global.fetch = jest.fn().mockImplementation(() => mockGetProducts);
beforeAll(() => jest.spyOn(window, "fetch"));




describe("HTTP responses deleteHoliday", () => {
  test("should call the delete request", async () => {
   await getAllProducts(""); 
  });
});
