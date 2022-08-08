import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import Converter from "./Converter"
import TestWrapper from "../../providers/TestWrapper"
import { GiJesterHat } from "react-icons/gi"

describe("Converter component", () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })
  it("renders correctly", () => {
    render(
      <TestWrapper>
        <Converter isConverterActive={true} />
      </TestWrapper>
    )

    const converterElement = screen.getByTestId("converter-body")
    expect(converterElement).toBeInTheDocument()
    expect(converterElement).toBeVisible()
  })

  it("handles options correctly", () => {
    render(
      <TestWrapper>
        <Converter isConverterActive={true} />
      </TestWrapper>
    )

    const selectElements = screen.getAllByTestId("select-option")
    selectElements.forEach(element => {
      expect(element).toBeInTheDocument()
    })
    const inputElement = screen.getByPlaceholderText(/Wprowadź wartość../i)
    expect(inputElement).toBeInTheDocument()
    const productSelectElement = screen.getByTestId("select-product")
    expect(productSelectElement).toBeInTheDocument()
    fireEvent.click(productSelectElement)
    const measuresSelectElement = screen.getByTestId("select-measures")
    expect(measuresSelectElement).toBeInTheDocument()
    const firstOptionElement = screen.getByText(/kakao/i)
    expect(firstOptionElement).toBeInTheDocument()

  })
  it("counts values correctly", () => {
    render(
      <TestWrapper>
        <Converter isConverterActive={true} />
      </TestWrapper>
    )
    const productSelectElement = screen.getByTestId("select-product")
    fireEvent.click(productSelectElement)
    fireEvent.change(productSelectElement, { target: { value: "kakao" } })
    expect(productSelectElement.value).toBe("kakao")

    const measuresSelectElement = screen.getByTestId("select-measures")
    fireEvent.click(measuresSelectElement)
    fireEvent.change(measuresSelectElement, { target: { value: "dag" } })
    expect(measuresSelectElement.value).toBe("dag")

    const measureOptionElement = screen.getByText(/dag/i)
    expect(measureOptionElement).toBeInTheDocument()

    const inputElement = screen.getByPlaceholderText(/Wprowadź wartość../i)
    fireEvent.change(inputElement, { target: { value: "1337" } })
    expect(inputElement.value).toBe("1337")

    const cupValue = screen.getByText(/szklanki/i)
    const spoonValue = screen.getByText(/łyżki/i)
    const teaspoonValue = screen.getByText(/łyżeczki/i)
    setTimeout(() => {
      expect(cupValue).toBe("133.7 szklanki")
      expect(spoonValue).toBe("2228.3 łyżki")
      expect(teaspoonValue).toBe("6685 łyżeczki")
    }, 300)
  })
  it("cleans all values", () => {
    render(
      <TestWrapper>
        <Converter isConverterActive={true} />
      </TestWrapper>
    )
    const productSelectElement = screen.getByTestId("select-product");
    fireEvent.click(productSelectElement);
    fireEvent.change(productSelectElement, { target: { value: "kakao" } });

    const measuresSelectElement = screen.getByTestId("select-measures");
    fireEvent.click(measuresSelectElement);
    fireEvent.change(measuresSelectElement, { target: { value: "dag" } });

    const inputElement = screen.getByPlaceholderText(/Wprowadź wartość../i);
    fireEvent.change(inputElement, { target: { value: "1337" } });

    const cupValue = screen.getByText(/szklanki/i);
    const spoonValue = screen.getByText(/łyżki/i);
    const teaspoonValue = screen.getByText(/łyżeczki/i);

    const cleanButton = screen.getByText(/Wyczyść/i);
    fireEvent.click(cleanButton);

  expect(inputElement.value).toBe('');
    setTimeout(() => {
      expect(cupValue).toBe("0 szklanki");
      expect(spoonValue).toBe("0 łyżki");
      expect(teaspoonValue).toBe("0 łyżeczki");
    }, 300);
  })
  it("closes converter", ()=>{
    render(
        <TestWrapper>
          <Converter isConverterActive={true} />
        </TestWrapper>
    )

    const converterElement = screen.getByTestId("converter-body");
    const closeButtonElement = screen.getByText(/Zamknij/i);
    fireEvent.click(closeButtonElement);
    expect(converterElement).not.toBeVisible();

  })
})
