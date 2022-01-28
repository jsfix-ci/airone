/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import React from "react";

import { ACL } from "../../apiclient/autogenerated";
import { TestWrapper } from "../../utils/TestWrapper";

import { ACLForm } from "./ACLForm";

test("should render a component with essential props", function () {
  const acl: ACL = {
    id: 0,
    name: "entity1",
    objtype: 1,
    isPublic: true,
    defaultPermission: 1,
    parent: undefined,
    acl: undefined,
    acltypes: [
      {
        id: 1,
        name: "Nothing",
      },
      {
        id: 2,
        name: "Full Controllable",
      },
    ],
    members: [
      {
        id: 1,
        name: "test1",
        type: 1,
        current_permission: 1,
      },
    ],
  };

  expect(() =>
    render(<ACLForm acl={acl} objectId={1} />, { wrapper: TestWrapper })
  ).not.toThrow();
});
