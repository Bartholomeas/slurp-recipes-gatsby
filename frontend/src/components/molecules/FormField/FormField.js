import React from "react"
import styled, { css } from "styled-components"

const inputStyles = css`
  padding: 1rem 1.2rem;
  width: 100%;
  border: none;
  border-radius: 8px;
  box-shadow: 3px 5px 10px ${({ theme }) => theme.colors.shadow};
  /* box-shadow: ${({ isImage }) =>
    isImage ? "none" : `3px 5px 10px ${({ theme }) => theme.colors.shadow}`}; */
  background: ${({ isImage }) => (isImage ? "none" : "auto")};
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: ${({ width }) => (width ? `${width}%` : "10%")};
  margin-bottom: 1.6rem;
`

const Label = styled.label`
  font-size: 1.6rem;
  margin-bottom: 1rem;
`

const Input = styled.input`
  ${inputStyles}
`

const Textarea = styled.textarea`
  ${inputStyles}
  resize:vertical;
  height: 150%;
`

const FormField = ({
  id,
  isImage = false,
  label,
  name,
  textarea,
  type = "text",
  width = "100",
  ...props
}) => {
  return (
    <Wrapper width={width}>
      <Label htmlFor={id}>{label}</Label>
      {!textarea ? (
        <Input id={id} name={name} type={type}></Input>
      ) : (
        <Textarea id={id} name={name}></Textarea>
      )}
    </Wrapper>
  )
}

export default FormField
