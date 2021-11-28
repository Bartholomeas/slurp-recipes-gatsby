import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: ${({ width }) => (width ? `${width}%` : "10%")};
  margin-bottom: 1.6rem;
`

const Label = styled.label`
  font-size: 1.8rem;
  margin-bottom: 1rem;
`

const Input = styled.input`
  padding: 1rem 1.2rem;
  width: 100%;
  border: none;
  border-radius: 8px;
  box-shadow: 3px 5px 10px ${({ theme }) => theme.colors.shadow};
  background: ${({ isImage }) => (isImage ? "none" : "auto")};
  background: inherit;
`

const FormField = ({
  id,
  isImage = false,
  label,
  name,
  type = "text",
  width = "100",
  ...props
}) => {
  return (
    <Wrapper width={width}>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} name={name} type={type}></Input>
    </Wrapper>
  )
}

export default FormField
