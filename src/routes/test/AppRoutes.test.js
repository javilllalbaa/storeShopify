import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

import AppRoutes from "../AppRoutes";

const testProps = {
    product: {
        id: "MLA9134324324",
        thumbnail: "image.png",
        title: "iPhone 11 64 Gb Blanco",
        price: { currency: "ARS", amount: "342343" },
        "attributes": [
            {
                "id": "BRAND",
                "name": "Marca",
                "value_id": "5627653",
                "value_name": "Vulcano BA",
                "value_struct": null,
                "values": [
                    {
                        "id": "5627653",
                        "name": "Vulcano BA",
                        "struct": null
                    }
                ],
                "attribute_group_id": "OTHERS",
                "attribute_group_name": "Otros"
            }
        ]
    },
    isFetchingProduct: false,
    selectedProduct: true
};

jest.mock('./../../store/products', () => ({
    selectData: jest.fn().mockReturnValue(testProps.product)
}));

jest.mock("react-redux", () => {
    return {
        useDispatch: () => jest.fn(),
        useSelector: () => jest.fn(),
        Provider: ({ children }) => children
    };
});

jest.mock("react-router-dom", () => {
    return {
        useLocation: jest.fn().mockReturnValue({ pathname: "/" }),
        useHistory: () => ({
            push: jest.fn(),
        }),
        BrowserRouter: () => jest.fn(),
        Router: () => jest.fn(),
        Route: () => jest.fn(),
        Switch: () => jest.fn(),
    };
});

describe("HomePage component", () => {
  describe("WHEN the component is render", () => {
    const wrapper = shallow(<AppRoutes />);

    it("THEN should display HomePage component", () => {
      expect(wrapper).toMatchSnapshot();
      wrapper.unmount()
    });

  });
});
