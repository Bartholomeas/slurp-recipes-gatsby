import React from "react"
import styled, { css } from "styled-components"
import ErrorText from "../../atoms/ErrorText/ErrorText"

const inputStyles = css`
  width: 100%;
  height: 5rem;
  padding: 1rem 1.2rem;
  border: none;
  border-radius: 8px;
  border: 2px solid
    ${({ isError, theme }) =>
      isError ? theme.colors.errorColor : theme.colors.grey};
  background: ${({ isImage }) => (isImage ? "none" : "auto")};
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 1.6rem;

  & .invalid {
    border: 1px solid ${({ theme }) => theme.colors.errorColor};
  }

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

const FormField = React.forwardRef(
  (
    {
      nameId = "",
      content = "",
      textarea = false,
      isError = false,
      errorInfo = content,
      type = "text",
      width = "100",
      onChange = () => {},
      inputFunc,
    },
    ref
  ) => {
    return (
      <Wrapper width={width}>
        <Label htmlFor={nameId}>{content}</Label>
        {!textarea ? (
          <Input
            isError={isError}
            onChange={onChange}
            id={nameId}
            name={nameId}
            type={type}
            ref={ref}
            onKeyUp={inputFunc}
          />
        ) : (
          <Textarea
            isError={isError}
            onChange={e => onChange(e)}
            id={nameId}
            name={nameId}
          />
        )}
        {isError ? (
          <ErrorText>{`Niepoprawne: ${errorInfo.toLowerCase()}`}</ErrorText>
        ) : null}
      </Wrapper>
    )
  }
)

export default FormField
