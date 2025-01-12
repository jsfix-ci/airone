/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import React from "react";

import { Group } from "../../apiclient/autogenerated";

import { GroupForm } from "components/group/GroupForm";
import { TestWrapper } from "utils/TestWrapper";

test("should render a component with essential props", function () {
  Object.defineProperty(window, "django_context", {
    value: {
      user: {
        isSuperuser: true,
      },
    },
    writable: false,
  });

  const groups = [
    {
      id: 1,
      name: "group1",
      children: [
        {
          id: 1,
          name: "group1",
          children: [],
        },
        {
          id: 2,
          name: "group2",
          children: [],
        },
      ],
    },
    {
      id: 2,
      name: "group2",
      children: [],
    },
  ];

  const group: Group = {
    id: 1,
    name: "test",
    members: [],
  };
  const setGroup = (group: Group) => {
    /* do nothing */
  };

  /* eslint-disable */
  jest
    .spyOn(require("apiclient/AironeApiClientV2").aironeApiClientV2, "getUsers")
    .mockResolvedValue(Promise.resolve([]));
  jest
    .spyOn(
      require("apiclient/AironeApiClientV2").aironeApiClientV2,
      "getGroupTrees"
    )
    .mockResolvedValue(Promise.resolve(groups));
  /* eslint-enable */

  expect(() =>
    render(<GroupForm group={group} setGroup={setGroup} />, {
      wrapper: TestWrapper,
    })
  ).not.toThrow();
});
