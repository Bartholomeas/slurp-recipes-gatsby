import React from "react"
import FormField from "../../molecules/FormField/FormField"
import SelectField from "../../molecules/SelectField/SelectField"
import {
  ConverterWrapper,
  MeasuresContainer,
  ConverterHeader,
} from "./Converter.styles"

const Converter = ({ setIsConverterActive, isConverterActive }) => {
  return (
    <ConverterWrapper
      // onClick={() => setIsConverterActive(false)}
      isConverterActive={isConverterActive}
    >
      <ConverterHeader>Konwertuj miary</ConverterHeader>
      <MeasuresContainer>
        <FormField nameId="wartosc" content="wartość" width="70" />
        <SelectField nameId="symbol" width="30" values={["g", "dag", "ml"]} />
      </MeasuresContainer>
      {/* <MeasureWrapper>
          <svg
            width="20"
            height="13"
            viewBox="0 0 20 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.91136e-06 0H17C17.7957 0 18.5587 0.316071 19.1213 0.87868C19.6839 1.44129 20 2.20435 20 3C20 3.79565 19.6839 4.55871 19.1213 5.12132C18.5587 5.68393 17.7957 6 17 6H15.748C15.2628 7.88715 14.1055 9.53234 12.4934 10.6268C10.8812 11.7212 8.9251 12.1897 6.99209 11.9442C5.05909 11.6987 3.28213 10.7561 1.99475 9.29345C0.707371 7.83078 -0.00192191 5.94853 3.91136e-06 4V0ZM16 4H17C17.2652 4 17.5196 3.89464 17.7071 3.70711C17.8946 3.51957 18 3.26522 18 3C18 2.73478 17.8946 2.48043 17.7071 2.29289C17.5196 2.10536 17.2652 2 17 2H16V4Z"
              fill="#860C0C"
            />
          </svg>
          <MeasureTitle>cup</MeasureTitle>
          <MeasureInfos>
            <MeasureValue>~240ml</MeasureValue>
            <MeasureValue>~16 tbsp</MeasureValue>
          </MeasureInfos>
        </MeasureWrapper>
        <MeasureWrapper>
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.5057 1.49603C19.9276 -1.08678 14.776 -0.121153 11.8276 2.83197C9.51665 5.14291 9.24477 7.98822 10.4776 10.3507L0.422896 19.3695C-0.120854 19.8617 -0.144291 20.7054 0.376021 21.221L2.78071 23.6257C3.29633 24.1413 4.14477 24.1179 4.63227 23.5742L13.651 13.5242C16.0135 14.757 18.8588 14.4851 21.1698 12.1742C24.1229 9.22572 25.0885 4.07416 22.5057 1.49603V1.49603Z"
              fill="#860C0C"
            />
          </svg>
          <MeasureTitle>tablespoon</MeasureTitle>
          <MeasureInfos>
            <MeasureValue>~15ml</MeasureValue>
            <MeasureValue>~10g</MeasureValue>
          </MeasureInfos>
        </MeasureWrapper>
        <MeasureWrapper>
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.17 8.39595L1.41 18.156L0 16.7459L9.76 6.98595C9.05 5.45595 9.55 3.30595 11.14 1.71595C13.05 -0.204051 15.79 -0.56405 17.25 0.89595C18.72 2.36595 18.36 5.10595 16.44 7.01595C14.85 8.60595 12.7 9.10595 11.17 8.39595V8.39595Z"
              fill="#860C0C"
            />
          </svg>
          <MeasureTitle>teaspoon</MeasureTitle>
          <MeasureInfos>
            <MeasureValue>~5ml</MeasureValue>
            <MeasureValue>~5g</MeasureValue>
          </MeasureInfos>
        </MeasureWrapper>
        <MeasureWrapper>
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.17 8.39595L1.41 18.156L0 16.7459L9.76 6.98595C9.05 5.45595 9.55 3.30595 11.14 1.71595C13.05 -0.204051 15.79 -0.56405 17.25 0.89595C18.72 2.36595 18.36 5.10595 16.44 7.01595C14.85 8.60595 12.7 9.10595 11.17 8.39595V8.39595Z"
              fill="#860C0C"
            />
          </svg>
          <MeasureTitle>pinch</MeasureTitle>
          <MeasureInfos>
            <MeasureValue>~1/2ml</MeasureValue>
            <MeasureValue>~1/2g</MeasureValue>
          </MeasureInfos>
        </MeasureWrapper> */}
    </ConverterWrapper>
  )
}

export default Converter
