import { shallow } from "enzyme";
import App from "./App";

describe("<App />", () => {
  test("that <App /> renders without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  test("that <App /> renders a div with class 'App-header'", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".App-header").length).toBe(1);
  });

  test("that <App /> renders a div with class 'App-body'", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".App-body").length).toBe(1);
  });

  test("that <App /> renders a div with class 'App-footer'", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".App-footer").length).toBe(1);
  });
});
