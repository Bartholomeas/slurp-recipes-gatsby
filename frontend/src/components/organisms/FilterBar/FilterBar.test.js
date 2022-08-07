import React from "react"
import {render, screen, fireEvent} from "@testing-library/react"
import FilterBar from "./FilterBar"
import TestWrapper from "../../providers/TestWrapper"


const toggleInputs = (checkboxes)=>{
checkboxes.forEach(checkbox => {
fireEvent.click(checkbox)
})
}

const checkInputsStatus = (checkboxes)=>{
    checkboxes.forEach(checkbox => {
        expect(checkbox.checked).toEqual(false)
    })
}

describe("Filter bar component", ()=>{
it("renders filter bar correctly", ()=>{
    render (
        <TestWrapper>
            <FilterBar isOpen={true}/>
        </TestWrapper>
    )
console.log(query)
const filterBarElement = screen.getByTestId('filterbar')
    expect(filterBarElement).toBeInTheDocument()
    expect(filterBarElement).toBeVisible()


});
// it("clears the filters", ()=>{
//     render (
//         <TestWrapper>
//             <FilterBar isOpen={true}/>
//         </TestWrapper>
//     )
// const clearButtonElement = screen.getByRole("button", {name: /Wyczyść/i})
//     const checkboxElements = screen.getAllByTestId("checkbox-input")
//     toggleInputs(checkboxElements)
//     fireEvent.click(clearButtonElement)
//     checkInputsStatus(checkboxElements)
// })

})