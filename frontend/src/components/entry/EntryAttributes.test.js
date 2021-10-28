/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import React from "react";

import EntryAttributes from "./EntryAttributes";

test("should render a component with essential props", function () {
  const attrs = [
    {
      name: "name",
      value: "value",
    },
  ];
  expect(() => render(<EntryAttributes attributes={attrs} />)).not.toThrow();
});