import React from "react";
import { create } from "react-test-renderer";

import Icon from "../Icon";

it("renders correctly", () => {
  const tree = create(<Icon name="ios-information-circle" />).toJSON();
  expect(tree).toMatchSnapshot();
});
