import React from "react"
import {render, screen} from "@testing-library/react"
import FilterBar from "./FilterBar"
import TestWrapper from "../../providers/TestWrapper"
describe("Filter bar component", ()=>{
it("renders filter bar correctly", ()=>{
    render (
        <TestWrapper>
            <FilterBar isOpen={true}/>
        </TestWrapper>
    )

const filterBarElement = screen.getByTestId('filterbar')
    expect(filterBarElement).toBeInTheDocument()
    expect(filterBarElement).toBeVisible()


    // window.fetch = jest.fn();
    // window.fetch.mockResolvedValueOnce({json: async () => [[]]})
});
})