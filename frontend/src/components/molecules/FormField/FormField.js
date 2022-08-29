import React from "react"
import styled, { css } from "styled-components"

const inputStyles = css`
  posiiton: relative;
  width: 100%;
  height: 4.2rem;
  padding: 0.8rem 1rem;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.darkBase};
  box-shadow: ${({ theme }) => theme.colors.shadow};
  border-radius: ${({ theme }) => theme.otherStyles.smallRadius};
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 1.6rem;

  & .invalid {
    border: 2px solid ${({ theme }) => theme.colors.errorColor};
  }

  @media only screen and (min-width: 768px) {
    width: ${({ width }) => (width ? `${width}%` : "100%")};
  }
`

const Label = styled.label`
  font-size: 1.7rem;
  color: ${({ theme }) => theme.colors.fontColor};
  margin-bottom: 1rem;
`

const Input = styled.input`
  ${inputStyles}
`

const Textarea = styled.textarea`
  ${inputStyles}
  height: 100vh;
  max-height: 200px;
  resize: vertical;
`

const FormField = React.forwardRef(
  (
    {
      nameId = "",
      content = "",
      textarea = false,
      type = "text",
      width = "100",
      onChange = () => {},
      placeholder = "",
      inputFunc,
    },
    ref
  ) => {
    return (
      <Wrapper width={width}>
        <Label htmlFor={nameId}>{content}</Label>
        {!textarea ? (
          <Input
            onChange={onChange}
            id={nameId}
            name={nameId}
            type={type}
            ref={ref}
            placeholder={placeholder}
            onKeyUp={inputFunc}
            data-id="input-field"
          />
        ) : (
          <Textarea
            onChange={e => onChange(e)}
            id={nameId}
            name={nameId}
            data-id="input-field"
            as="input"
          />
        )}
      </Wrapper>
    )
  }
)

export default FormField
