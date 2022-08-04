import React from "react"
import renderer from "react-test-renderer"
import TestWrapper from "../../providers/TestWrapper"
import Button from "./Button"

it("renders correctly", () => {
  const tree = renderer
    .create(
      <TestWrapper>
        <Button>Send button</Button>
      </TestWrapper>
    )
    .toJSON()
  expect(tree).toBeTruthy()
})
