import React from "react"
import styled from "styled-components"

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 1.6rem;

  @media only screen and (min-width: 768px) {
    width: ${({ width }) => (width ? `${width}%` : "100%")};
  }
`

export const SelectLabel = styled.label`
  font-size: 1.6rem;
  margin-bottom: 1rem;
`
export const Select = styled.select`
  width: 100%;
  height: 3.2rem;
  padding: 0.8rem 1rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.fontColor};
  border-bottom: 2px solid ${({ theme }) => theme.colors.darkBase};
  box-shadow: inset ${({ theme }) => theme.colors.shadow};
  border-radius: ${({ theme }) => theme.otherStyles.smallRadius};
  cursor: pointer;
`

const SelectField = ({
  content = "",
  nameId = "",
  width = "100",
  onChange = () => {},
  valuesIds = [],
  ...values
}) => {
  return (
    <SelectWrapper width={width}>
      <SelectLabel htmlFor={nameId}>{content}</SelectLabel>
      <Select
        defaultValue="mąka pszenna"
        onChange={(e => onChange(e)) || null}
        name={nameId}
        id={nameId}
      >
        <option style={{ color: "black" }} value="" defaultValue="">
          Wybierz
        </option>
        {values.values.map((value, idx) => {
          if (valuesIds.length > 0) {
            return (
              <option
                style={{ color: "black" }}
                value={valuesIds[idx]}
                key={value + idx}
              >
                {value}
              </option>
            )
          } else {
            return (
              <option
                style={{ color: "black" }}
                value={value}
                key={value + idx}
              >
                {value}
              </option>
            )
          }
        })}
      </Select>
    </SelectWrapper>
  )
}

export default SelectField
