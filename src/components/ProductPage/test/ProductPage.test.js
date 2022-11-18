import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

import ProductPage from "../ProductPage";

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
    ],
    isFetchingProduct: false,
    selectedProduct: true
};

jest.mock('./../../../store/products', () => ({
    loadProduct: jest.fn().mockReturnValue(testProps.product)
}));

jest.mock("react-redux", () => {
    return {
        useDispatch: () => jest.fn(),
        useSelector: () => jest.fn()
    };
});

jest.mock("react-router-dom", () => {
    return {
        useLocation: jest.fn().mockReturnValue({ pathname: "/" }),
        useHistory: () => ({
            push: jest.fn(),
        }),
    };
});

describe("ProductPage component", () => {


    describe("WHEN the ProductPage component is render", () => {
        const wrapper = mount(<ProductPage {...testProps} />);

        it("THEN should display ProductPage component", () => {
            expect(wrapper).toMatchSnapshot();
        });

        // const product = wrapper
        //     .find("ComponentWithLoadingIndicator")
        //     .dive()
        //     .find("Product");

        // it("THEN should exist the ProductPage component", () => {
        //     expect(product.exists()).toBeTruthy();
        // });

    });

    describe("WHEN the ProductPage component is render with product", () => {
        const wrapper = shallow(<ProductPage {...testProps} />);

        it("THEN should display ProductPage component", () => {
            expect(wrapper).toMatchSnapshot();
        });

        const product = wrapper
            .find("ComponentWithLoadingIndicator")
            .dive()
            .find("Product");

        it("THEN should exist the ProductPage component", () => {
            expect(product.exists()).toBeTruthy();
        });

    });

    describe("WHEN the ProductPage component is render without product", () => {
        testProps.selectedProduct = false
        const wrapper = shallow(<ProductPage {...testProps} />);

        it("THEN should display ProductPage component without product", () => {
            expect(wrapper).toMatchSnapshot();
        });

        const product = wrapper
            .find("ComponentWithLoadingIndicator")
            .dive()
            .find("HomePage");

        it("THEN should exist the HomePage component", () => {
            expect(product.exists()).toBeTruthy();
        });

    });

});