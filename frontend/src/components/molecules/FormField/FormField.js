import React from "react"
import styled, { css } from "styled-components"

const inputStyles = css`
  posiiton: relative;
  width: 100%;
  height: 3.2rem;
  padding: 0.8rem 1rem;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.darkBase};
  box-shadow: inset ${({ theme }) => theme.colors.shadow};
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
  resize:vertical;
  height: 6.4rem;
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
            onKeyUp={inputFunc}
          />
        ) : (
          <Textarea onChange={e => onChange(e)} id={nameId} name={nameId} />
        )}
      </Wrapper>
    )
  }
)

export default FormField
