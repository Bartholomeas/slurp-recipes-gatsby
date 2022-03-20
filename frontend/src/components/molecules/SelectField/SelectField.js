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
  height: 5rem;
  padding: 1rem 1.2rem;
  border: none;
  border-radius: 6px;
  border: 2px solid ${({ theme }) => theme.colors.grey};
  background: ${({ isImage }) => (isImage ? "none" : "auto")};
  font-family: "Playfair Display", serif;
  cursor: pointer;
`

const SelectField = ({
  content = "",
  nameId = "",
  width = "100",
  onChange = false,
  ...values
}) => {
  return (
    <SelectWrapper width={width}>
      <SelectLabel htmlFor={nameId}>{content}</SelectLabel>
      <Select onChange={e => onChange(e) || null} name={nameId} id={nameId}>
        {values.values.map((value, idx) => {
          return (
            <option value={value} key={value + idx}>
              {value}
            </option>
          )
        })}
      </Select>
    </SelectWrapper>
  )
}

export default SelectField
