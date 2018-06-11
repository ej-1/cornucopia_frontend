import React from "react";
import Error from "../errors/error";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

test("Error gets rendered", () => {
  const component = renderer.create(<Error message={"Danger! Danger!"} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Error without message gets rendered", () => {
  const wrapper = shallow(<Error />);
  expect(wrapper.find("div").html()).toEqual(
    '<div class="error">Something went wrong.</div>'
  );
});
