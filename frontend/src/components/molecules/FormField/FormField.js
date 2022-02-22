import React, { useRef } from "react"
import styled, { css } from "styled-components"

const inputStyles = css`
  padding: 1rem 1.2rem;
  width: 100%;
  border: none;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.darkerGrey};
  background: ${({ isImage }) => (isImage ? "none" : "auto")};
`

const Wrapper = styled.div`
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
  label = "title",
  name,
  textarea,
  type = "text",
  width = "100",
  onChange,
  ...props
}) => {
  const inputRef = useRef()

  return (
    <Wrapper width={width}>
      <Label htmlFor={id}>{label}</Label>
      {!textarea ? (
        <Input
          onChange={onChange ? onChange : null}
          id={id}
          name={name}
          type={type}
        ></Input>
      ) : (
        <Textarea onChange={e => onChange(e)} id={id} name={name}></Textarea>
      )}
    </Wrapper>
  )
}

export default FormField
