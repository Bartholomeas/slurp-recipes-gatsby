import React, { useState, useEffect } from "react"
import FormField from "../../molecules/FormField/FormField"
import SelectField from "../../molecules/SelectField/SelectField"
import {
  ConverterWrapper,
  MeasuresContainer,
  ConverterHeader,
  TopContainer,
  ConvertedValuesBox,
  ConvertedContainer,
  ConvertedValue,
} from "./Converter.styles"
import { FaUtensilSpoon } from "react-icons/fa"
import { GiSpoon } from "react-icons/gi"
import { BsCupFill } from "react-icons/bs"

const Converter = ({ setIsConverterActive, isConverterActive }) => {
  const initialState = { product: "mąka pszenna", symbol: "g", value: "" }
  const [dataToConvert, setDataToConvert] = useState(initialState)
  const [convertedValues, setConvertedValues] = useState({
    cup: "",
    spoon: "",
    teaspoon: "",
  })

  let timer
  let cup, spoon, teaspoon

  const measures = [
    (cup = {
      name: "cup",
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
    }),
    (spoon = {
      name: "spoon",
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
    }),
    (teaspoon = {
      name: "teaspoon",
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
    }),
  ]

  const setInputValue = e => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      setDataToConvert(prevState => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }))
    }, 500)
  }

  const setSelectValue = e => {
    setDataToConvert(prevState => ({
      ...prevState,
      [e.target.name]:
        e.target.options[e.target.options.selectedIndex].innerText,
    }))
  }

  useEffect(() => {
    const calculateConvertedValue = (({
      product = "",
      symbol = "",
      value = "",
    }) => {
      if (symbol === "dag") {
        measures.forEach(measure => {
          setConvertedValues(prevState => ({
            ...prevState,
            [measure.name]: [
              parseFloat(
                ((dataToConvert.value * 10) / measure["g"][product]).toFixed(1)
              ),
            ],
          }))
        })
      } else if (symbol === "ml") {
        measures.forEach(measure => {
          setConvertedValues(prevState => ({
            ...prevState,
            [measure.name]: [
              parseFloat((dataToConvert.value / measure.ml).toFixed(1)),
            ],
          }))
        })
      } else {
        measures.forEach(measure => {
          setConvertedValues(prevState => ({
            ...prevState,
            [measure.name]: [
              parseFloat(
                (dataToConvert.value / measure[symbol][product]).toFixed(1)
              ),
            ],
          }))
        })
      }
    })(dataToConvert)
  }, [dataToConvert])

  return (
    <ConverterWrapper
      // onClick={() => setIsConverterActive(false)}
      isConverterActive={isConverterActive}
    >
      <ConverterHeader>Konwertuj miary</ConverterHeader>
      <MeasuresContainer>
        <TopContainer>
          <SelectField
            onChange={e => setSelectValue(e)}
            nameId="product"
            content="produkt"
            width="70"
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
          <SelectField
            onChange={e => setSelectValue(e)}
            nameId="symbol"
            content="miara"
            width="30"
            values={["g", "dag", "ml"]}
          />
        </TopContainer>
        <FormField
          inputFunc={e => setInputValue(e)}
          nameId="value"
          content="wartość"
          type="number"
        />

        <ConvertedContainer>
          <p>
            {dataToConvert.value
              ? ` ${dataToConvert.value}
          ${dataToConvert.symbol} ${dataToConvert.product} to około: `
              : "Wprowadź dane"}
          </p>
          <ConvertedValuesBox>
            <ConvertedValue>
              {convertedValues.cup} szklanki
              <BsCupFill />
            </ConvertedValue>
            <ConvertedValue>
              {convertedValues.spoon} łyżki
              <FaUtensilSpoon />
            </ConvertedValue>
            <ConvertedValue>
              {convertedValues.teaspoon} łyżeczki
              <GiSpoon />
            </ConvertedValue>
          </ConvertedValuesBox>
        </ConvertedContainer>
      </MeasuresContainer>
      <button onClick={() => setDataToConvert(initialState)}>Wyczyść</button>
    </ConverterWrapper>
  )
}

export default Converter
