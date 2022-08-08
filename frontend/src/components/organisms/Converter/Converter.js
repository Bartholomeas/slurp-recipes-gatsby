import React from "react"
import useConverter from "../../../hooks/useConverter"
import FormField from "../../molecules/FormField/FormField"
import SelectField from "../../molecules/SelectField/SelectField"
import Button from "../../atoms/Button/Button"
import {
  ConverterWrapper,
  MeasuresContainer,
  ConvertedInfo,
  ConverterHeader,
  TopContainer,
  ConvertedValuesBox,
  ConvertedContainer,
  ConvertedValue,
  ButtonContainer,
} from "./Converter.styles"
import { FaUtensilSpoon } from "react-icons/fa"
import { GiSpoon } from "react-icons/gi"
import { BsCupFill } from "react-icons/bs"

const Converter = ({ closeConverter, isConverterActive }) => {
  const {
    setSelectValue,
    setInputValue,
    dataToConvert,
    convertedValues,
      clearData
  } = useConverter()

  return (
    <ConverterWrapper
      isConverterActive={isConverterActive}
      data-testid={"converter-body"}
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
            testid={"select-product"}
          />
          <SelectField
            onChange={e => setSelectValue(e)}
            nameId="symbol"
            content="miara"
            width="30"
            values={["g", "dag", "ml"]}
            testid={"select-measures"}
          />
        </TopContainer>
        <FormField
          inputFunc={e => setInputValue(e)}
          placeholder="Wprowadź wartość.."
          nameId="value"
          content="wartość"
          type="number"
        />

        <ConvertedContainer>
          <ConvertedInfo>
            {dataToConvert.value
              ? ` ${dataToConvert.value}
          ${dataToConvert.symbol} ${dataToConvert.product} to około: `
              : "Wprowadź dane"}
          </ConvertedInfo>
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
      <ButtonContainer>
        <Button isLong onClick={() => clearData()}>
          Wyczyść
        </Button>
        <Button greyColor={true} onClick={() => closeConverter()}>
          Zamknij
        </Button>
      </ButtonContainer>
    </ConverterWrapper>
  )
}

export default Converter
