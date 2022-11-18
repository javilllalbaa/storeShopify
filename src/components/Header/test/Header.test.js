import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });
import Header from "../Header";

const mockHistoryPush = jest.fn();
const dispatch = jest.fn();
const goToProductList = jest.fn();
const loadProductsSearch = jest.fn();
const goToClear = jest.fn();


jest.mock('react-redux', () => {
  return {
    useDispatch: () => jest.fn()
  }
});

jest.mock("react-router-dom", () => {
  return {
    useLocation: jest
      .fn()
      .mockReturnValue({ pathname: "/items/MLA680573238" }),
    useHistory: () => ({
      push: mockHistoryPush,
    }),
  };
});

describe("Header component", () => {

  describe("WHEN the component is render", () => {

    const wrapper = mount(<Header />);

    it("THEN should display Header component", () => {
      expect(wrapper).toMatchSnapshot();
      wrapper.unmount()
    });

  });

  describe("WHEN the Button is pressed", () => {
    const wrapper = shallow(<Header dispatch={dispatch} />);

    it("THEN getProductList should be called", () => {
      wrapper.find(`[data-testid="search-button_2"]`).simulate("click");
      goToProductList(dispatch)
      dispatch(loadProductsSearch([]))
      expect(dispatch).toBeCalledTimes(1);
      expect(loadProductsSearch).toBeCalledTimes(1);
    });

  });

  describe("WHEN the Image is pressed", () => {
    const wrapper = shallow(<Header />);

    it("THEN push location should be called /", () => {
      wrapper.find(`[data-testid="header-logo"]`).simulate("click");
      expect(mockHistoryPush).toHaveBeenCalledWith('/');
    });
  });

});
