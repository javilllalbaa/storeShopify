import React from "react";
import { shallow } from "enzyme";

import Product from "../Product";

describe("ProductPage component", () => {
  const testProps = {
    product: [
      {
          "id": 8005666078999,
          "title": "dawn snow",
          "body_html": null,
          "vendor": "test-options-javi",
          "product_type": "",
          "variants": [
              {
                  "id": 44054249144599,
                  "product_id": 8005666078999,
                  "title": "Default Title",
                  "price": "9.41"
              }
          ],
          "image": {
              "id": 39860528251159,
              "product_id": 8005666078999,
              "src": "https://cdn.shopify.com/s/files/1/0678/1684/9687/products/helados.jpg?v=1668597326"
          }
      }
  ]
  };
  describe("WHEN the Product component is render", () => {
    const wrapper = shallow(<Product {...testProps} />);

    it("THEN should display Product component", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
