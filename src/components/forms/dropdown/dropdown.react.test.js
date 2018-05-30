// Link.react.test.js
import React from "react";
import renderer from "react-test-renderer";
import DropDown from "../dropdown/dropdown";

test("Footer gets rendered", () => {
  const handleChange = () => {};

  const component = renderer.create(
    <DropDown
      title="the nice title"
      onSelect={handleChange} // MOCK IT.
      options={["OPTION NUMBER 1", "OPTION NUMBER 2", "OPTION NUMBER 3"]}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
