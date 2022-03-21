import React from "react"
import FormField from "../../molecules/FormField/FormField"
import SelectField from "../../molecules/SelectField/SelectField"
import {
  ConverterWrapper,
  MeasuresContainer,
  ConverterHeader,
  TopContainer,
  ConvertedValuesBox,
  ConvertedContainer,
} from "./Converter.styles"
import { FaUtensilSpoon } from "react-icons/fa"
import { GiSpoon } from "react-icons/gi"
import { BsCupFill } from "react-icons/bs"

const Converter = ({ setIsConverterActive, isConverterActive }) => {
  const cup = {
    g: {
      "mąka pszenna": 150,
      "mąka ziemniaczana": 150,
      "cukier kryształ": 250,
      "cukier puder": 250,
      kakao: 100,
      "bułka tarta": 150,
      "kasza manna": 250,
      sól: 150,
      olej: 200,
      mleko: 200,
    },
    ml: 250,
  }
  const spoon = {
    g: {
      "mąka pszenna": 9,
      "mąka ziemniaczana": 9,
      "cukier kryształ": 15,
      "cukier puder": 9,
      kakao: 6,
      "bułka tarta": 9,
      "kasza manna": 15,
      sól: 9,
      olej: 15,
      mleko: 15,
    },
    ml: 15,
  }
  const teaspoon = {
    g: {
      "mąka pszenna": 3,
      "mąka ziemniaczana": 3,
      "cukier kryształ": 5,
      "cukier puder": 3,
      kakao: 2,
      "bułka tarta": 3,
      "kasza manna": 5,
      sól: 3,
      olej: 4,
      mleko: 5,
    },
    ml: 5,
  }

  let timer

  const getInputValue = e => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      console.log(e.target.value)
    }, 500)

    // console.log(e.target.value)
  }
  const getSelectValue = e => {
    console.log(e.target.options[e.target.options.selectedIndex].innerText)
  }

  const calculateConvertedValue = ((symbol, value) => {
    // console.log(teaspoon.g["kasza manna"])
  })()

  return (
    <ConverterWrapper
      // onClick={() => setIsConverterActive(false)}
      isConverterActive={isConverterActive}
    >
      <ConverterHeader>Konwertuj miary</ConverterHeader>
      <MeasuresContainer>
        <TopContainer>
          <FormField
            inputFunc={e => getInputValue(e)}
            nameId="wartosc"
            content="wartość"
            type="number"
            width="70"
          />
          <SelectField
            onChange={e => getSelectValue(e)}
            nameId="symbol"
            content="miara"
            width="30"
            values={["g", "dag", "ml"]}
          />
        </TopContainer>
        <SelectField
          onChange={e => getSelectValue(e)}
          nameId="product"
          content="produkt"
          values={[
            "mąka pszenna",
            "mąka ziemniaczana",
            "cukier kryształ",
            "cukier puder",
            "kakao",
            "bułka tarta",
            "kasza manna",
            "sól",
            "olej",
            "mleko",
          ]}
        />
        <ConvertedContainer>
          <p>300g mąki pszennej to około:</p>
          <ConvertedValuesBox>
            <GiSpoon />
            <BsCupFill />
            <FaUtensilSpoon />
          </ConvertedValuesBox>
        </ConvertedContainer>
      </MeasuresContainer>
      <button>Wyczyść</button>
    </ConverterWrapper>
  )
}

export default Converter
