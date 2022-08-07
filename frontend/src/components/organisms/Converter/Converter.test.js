import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import Converter from "./Converter"
import TestWrapper from "../../providers/TestWrapper"

describe("Converter component", () => {
  it("renders correctly", () => {
    render(
      <TestWrapper>
        <Converter isConverterActive={true}/>
      </TestWrapper>
    )

    const converterElement = screen.getByTestId('converter-body')
    expect(converterElement).toBeInTheDocument()
    expect(converterElement).toBeVisible()
  })

it("handles options correctly", ()=>{
  render(
      <TestWrapper>
        <Converter isConverterActive={true}/>
      </TestWrapper>
  )

  const selectElements = screen.getAllByTestId('select-option');
    selectElements.forEach(element => {
  expect(element).toBeInTheDocument();
});
const inputElement = screen.getByPlaceholderText(/Wprowadź wartość../i);
  expect(inputElement).toBeInTheDocument();
  const productSelectElement = screen.getByTestId('select-product');
  expect(productSelectElement).toBeInTheDocument();
  fireEvent.click(productSelectElement);
  const measuresSelectElement = screen.getByTestId('select-measures');
expect(measuresSelectElement).toBeInTheDocument();
  const firstOptionElement = screen.getByText(/kakao/i);
  expect(firstOptionElement).toBeInTheDocument();

});
  it('counts values correctly',()=>{
    render(
        <TestWrapper>
          <Converter isConverterActive={true}/>
        </TestWrapper>
    )
//     const productSelectElement = screen.getByTestId('select-product');
//     fireEvent.click(productSelectElement);
//     fireEvent.change(productSelectElement, {target:{value:"kakao"}})
//     expect(productSelectElement.value).toBe('kakao');
//
//     const measuresSelectElement = screen.getByTestId('select-measures');
//     fireEvent.click(measuresSelectElement);
// fireEvent.change(measuresSelectElement, {target:{value:'dag'}})
//     expect(measuresSelectElement).toBe('dag')

    // const measureOptionElement = screen.getByText(/dag/i);
    // expect(measureOptionElement).toBeInTheDocument();

    const inputElement = screen.getByPlaceholderText(/Wprowadź wartość../i);
    fireEvent.change(inputElement, {target:{value:"10"}});
    expect(inputElement.value).toBe("10");



  })


})
