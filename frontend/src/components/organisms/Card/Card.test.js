import React from "react"
import { render, screen} from "@testing-library/react"
import Card from "./Card"
import TestWrapper from "../../providers/TestWrapper"




const payloadMock = {
    difficulties: [{difficulties: "trudne"}],
    img:"../../../images/landingPlate1.png",
    title: "Sernik Zebra",
    diets: [{diets:"zbilansowana"}],
    types: [{types:"deser"}],
    rating: 5
}

beforeEach(()=>{
    jest.useFakeTimers()
})

describe("Card component", ()=>{
    it("renders correctly", async ()=>{
        render(
        <TestWrapper>
          <  Card  payload={payloadMock}/>
        </TestWrapper>
        )

        const cardBodyElement = screen.getByTestId("card-body");
        const cardTitle = screen.getByText(/Sernik Zebra/i);
        const cardDifficulty = screen.getByTestId("difficulty-text");
        const cardType =  screen.getByText(/deser/i)
        const cardDiet = screen.getByText(/zbilansowana/i)
        const ratingIndicator = screen.getByTestId("rating-indicator")
        expect(cardBodyElement).toBeInTheDocument();
        expect(cardTitle).toBeInTheDocument();
        expect(cardDifficulty).toBeInTheDocument();
        expect(cardType).toBeInTheDocument();
        expect(cardDiet).toBeInTheDocument();
        expect(ratingIndicator).toBeInTheDocument();
    })
})