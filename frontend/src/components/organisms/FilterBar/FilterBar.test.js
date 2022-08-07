import React from "react"
import {render, screen, fireEvent} from "@testing-library/react"
import FilterBar from "./FilterBar"
import TestWrapper from "../../providers/TestWrapper"
import filterBar from "./FilterBar";



beforeEach(() => {
    const filterbarData =  {
        allStrapiDiets: {nodes:[{diets: "wegańska"}, {diets:"wege"}, {diets:"bez-laktozy"}, {diets: "zbilansowana"}]},
        allStrapiDifficulties: {nodes:[{difficulties:"łatwe"},{difficulties:"średnie"},{difficulties:"trudne"}]},
        allStrapiTypes: {nodes:[{types:"obiad"},{types:"śniadania"},{types:"kolacja"}, {types:"deser"}, {types:"napój"}]}
    }
})

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
    const filterbarData =  {
        allStrapiDiets: {nodes:[{diets: "wegańska"}, {diets:"wege"}, {diets:"bez-laktozy"}, {diets: "zbilansowana"}]},
        allStrapiDifficulties: {nodes:[{difficulties:"łatwe"},{difficulties:"średnie"},{difficulties:"trudne"}]},
        allStrapiTypes: {nodes:[{types:"obiad"},{types:"śniadania"},{types:"kolacja"}, {types:"deser"}, {types:"napój"}]}
    }
    render (
        <TestWrapper>
            <FilterBar data={filterbarData} isOpen={true}/>
        </TestWrapper>
    )
const filterBarElement = screen.getByTestId('filterbar')
    expect(filterBarElement).toBeInTheDocument()
    expect(filterBarElement).toBeVisible()


});
it("clears the filters", ()=>{
    const filterbarData =  {
        allStrapiDiets: {nodes:[{diets: "wegańska"}, {diets:"wege"}, {diets:"bez-laktozy"}, {diets: "zbilansowana"}]},
        allStrapiDifficulties: {nodes:[{difficulties:"łatwe"},{difficulties:"średnie"},{difficulties:"trudne"}]},
        allStrapiTypes: {nodes:[{types:"obiad"},{types:"śniadania"},{types:"kolacja"}, {types:"deser"}, {types:"napój"}]}
    }
    render (
        <TestWrapper>
            <FilterBar data={filterbarData} isOpen={true}/>
        </TestWrapper>
    )
const clearButtonElement = screen.getByRole("button", {name: /Wyczyść/i})
    const checkboxElements = screen.getAllByTestId("checkbox-input")
    toggleInputs(checkboxElements)
    fireEvent.click(clearButtonElement)
    checkInputsStatus(checkboxElements)
})

})