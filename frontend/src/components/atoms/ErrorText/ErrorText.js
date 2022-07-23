import React from "react"
import styled from "styled-components"
import { BsExclamationCircle } from "react-icons/bs"

const ErrorBox = styled.span`
  display: flex;
  align-items: center;
  font-family: "Poppins", sans-serif;
  font-size: 1.4rem;
  padding: 1.3rem 0.8rem;
  margin: 2rem 0;
  border-radius: ${({ theme }) => theme.otherStyles.smallRadius};
  background-color: ${({ theme }) => theme.colors.errorColor};
  color: ${({ theme }) => theme.colors.white};
`

const ErrorIcon = styled(BsExclamationCircle)`
  color: ${({ theme }) => theme.colors.white};
  margin-right: 0.8rem;
`

const ErrorText = ({ children }) => {
  return (
    <ErrorBox>
      <ErrorIcon />
      {children}
    </ErrorBox>
  )
}

export default ErrorText
