import React from "react";
import {render, screen, fireEvent} from "@testing-library/react";
import TestWrapper from "../../providers/TestWrapper";
import SearchBar  from "./SearchBar";

describe("SearchBar component", ()=>{
    beforeEach(()=>{
        jest.useFakeTimers();
    })
    it("renders correctly", async ()=>{
    render (
    <TestWrapper>
        <SearchBar/>
    </TestWrapper>
    )

        const searchBarElement = screen.getByTestId("searchbar-body");
        const labelElement = screen.getByText(/Znajdź przepis/i);
        const inputElement = screen.getByPlaceholderText(/Znajdź przepis../i);
        setTimeout(()=>{
        const resultsContainerElement = screen.getByTestId("results-container")
        expect(resultsContainerElement).toBeInTheDocument();
        },100)

        expect(searchBarElement).toBeInTheDocument();
        expect(labelElement).toBeInTheDocument();
        expect(inputElement).toBeInTheDocument();
    })
    it("searches recipes by title", ()=>{
        render (
            <TestWrapper>
                <SearchBar/>
            </TestWrapper>
        )

        const inputElement = screen.getByPlaceholderText(/Znajdź przepis../i);
        fireEvent.change(inputElement, {target:{value: "Zebra"}});

        setTimeout(()=>{
            const foundRecipe = screen.getByText(/Sernik Zebra/i);
            expect(foundRecipe).toBeVisible();
        },500);

        fireEvent.change(inputElement, {target:{value: ""}});
        setTimeout(()=>{
            expect(foundRecipe).not.toBeVisible();
        },500);

    })
})