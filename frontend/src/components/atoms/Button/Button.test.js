import React from "react"
import renderer from "react-test-renderer"

import TestWrapper from "../../providers/TestWrapper"

import Button from "./Button"

it("renders correctly", () => {
  const tree = renderer
    .create(
      <TestWrapper>
        <Button content="Send"></Button>
      </TestWrapper>
    )
    .toJSON()
  expect(tree).toBeTruthy()
})
